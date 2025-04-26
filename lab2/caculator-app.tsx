import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  FlatList,
  SafeAreaView,
  Modal,
  Alert
} from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { evaluate, abs, sqrt } from 'mathjs';

interface CalcButtonProps {
  onPress: () => void;
  title: string;
  isDark: boolean;
  style?: object;
  textStyle?: object;
}

const CalcButton: React.FC<CalcButtonProps> = ({ onPress, title, isDark, style, textStyle }) => {
  const buttonStyle = [
    styles.button,
    isDark ? styles.darkButton : styles.lightButton,
    style,
  ];
  const buttonTextStyle = [
    styles.buttonText,
    isDark ? styles.darkText : styles.lightText,
    ['/', '*', '-', '+', '='].includes(title) ? styles.operatorButtonText : {},
    ['DEL', 'C','%','!','^','+/-', '|x|', '√a', 'sin', 'cos', 'tan', 'cot'].includes(title) ? styles.actionButtonText : {},
    textStyle,
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function CalculatorApp() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [isDark, setIsDark] = useState(false);
  const [history, setHistory] = useState<{ expression: string; result: string }[]>([]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const handlePress = (value: string) => {
    if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === 'DEL') {
      setExpression((prev) => prev.slice(0, -1));
      setResult('');
    } else if (value === '+/-') {
      if (result && result !== 'Error') {
        const negated = String(-1 * parseFloat(result));
        setExpression(negated);
        setResult('');
      } else if (expression && expression !== '0') {
        const parts = expression.split(/([+\-*/])/g).filter(part => part);
        const lastIndex = parts.length - 1;
        const lastPart = parts[lastIndex];
        if (!isNaN(parseFloat(lastPart))) {
          parts[lastIndex] = String(-1 * parseFloat(lastPart));
          setExpression(parts.join(''));
        }
      }
    } else if (['|x|', '√a', 'sin', 'cos', 'tan', 'cot'].includes(value)) {
      if (expression) {
        if (value === '|x|') setExpression(`abs(${expression})`);
        if (value === '√a') setExpression(`sqrt(${expression})`);
        if (value === 'sin') setExpression(`sin((${expression}) * π / 180)`);
        if (value === 'cos') setExpression(`cos((${expression}) * π / 180)`);
        if (value === 'tan') setExpression(`tan((${expression}) * π / 180)`);
        if (value === 'cot') setExpression(`1 / tan((${expression}) * π / 180)`);
        setResult('');
      }
    } else if (value === '=') {
      try {
        if (!expression || /[+\-*/.]$/.test(expression)) {
          setResult('Error');
          return;
        }
        const sanitized = expression.replace(/π/g, 'pi').replace(/--/g, '+');
        const evalResult = evaluate(sanitized).toString();
        setResult(evalResult);
        setHistory(prev => [{ expression, result: evalResult }, ...prev]);
      } catch {
        setResult('Error');
      }
    } else {
      if (result && !['+', '-', '*', '/'].includes(value) && !['+', '-', '*', '/'].includes(expression.slice(-1))) {
        setExpression(value);
        setResult('');
      } else {
        setExpression(prev => prev + value);
      }
    }
  };

  const confirmClearHistory = () => {
    Alert.alert(
      'Xoá lịch sử',
      'Bạn có chắc chắn muốn xoá toàn bộ lịch sử?',
      [
        { text: 'Huỷ', style: 'cancel' },
        { text: 'Xoá', style: 'destructive', onPress: () => setHistory([]) },
      ]
    );
  };

  const buttons = [
    [ '!', '%', 'DEL', 'C'],
    ['sin', 'cos', 'tan', 'cot'],
    ['|x|', '^', '√a', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['+/-', '0', '.', '='],
  ];

  const renderHistoryItem = ({ item }: { item: { expression: string; result: string } }) => (
    <View style={styles.historyItem}>
      <Text style={[styles.historyText, isDark ? styles.darkText : styles.lightText]}>
        {item.expression} = {item.result}
      </Text>
    </View>
  );

  const containerStyle = [
    styles.container,
    isDark ? styles.darkContainer : styles.lightContainer,
  ];

  return (
    <SafeAreaView style={containerStyle}>
      <TouchableOpacity
        style={styles.historyToggle}
        onPress={() => setShowHistoryModal(true)}
      >
        <Entypo name="time-slot" size={26} color={isDark ? '#fff' : '#000'} />
      </TouchableOpacity>

      <View style={styles.displayContainer}>
        <View style={styles.switchContainer}>
          <Entypo name="light-up" size={24} color={isDark ? '#ccc' : '#333'} />
          <Switch
            value={isDark}
            onValueChange={() => setIsDark(!isDark)}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDark ? "#f5dd4b" : "#f4f3f4"}
          />
          <Entypo name="moon" size={24} color={isDark ? '#ccc' : '#333'} />
        </View>
        <Text style={[styles.expression, isDark ? styles.darkText : styles.lightText]} numberOfLines={1} ellipsizeMode="head">
          {expression || '0'}
        </Text>
        <Text style={[styles.result, isDark ? styles.darkText : styles.lightText]} numberOfLines={1} ellipsizeMode="tail">
          {result || ''}
        </Text>
      </View>

      <View style={styles.buttonGrid}>
        {buttons.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((btn) => (
              <CalcButton
                key={btn}
                title={btn}
                onPress={() => handlePress(btn)}
                isDark={isDark}
                style={btn === '=' ? { flex: 2 } : {}}
              />
            ))}
          </View>
        ))}
      </View>

      <Modal
  visible={showHistoryModal}
  animationType="slide"
  transparent={true}
  onRequestClose={() => setShowHistoryModal(false)}
>
  <View style={styles.modalContainer}>
    <View style={[styles.modalContent, isDark ? styles.darkContainer : styles.lightContainer]}>
      <View style={styles.modalHeader}>
        <Text style={[styles.modalTitle, isDark ? styles.darkText : styles.lightText]}>Lịch sử tính toán</Text>
      </View>
      <FlatList
        data={history}
        renderItem={renderHistoryItem}
        keyExtractor={(item, index) => index.toString()}
        inverted
      />
      {/* Footer mới: Chứa nút Đóng và icon Xóa trên cùng một hàng */}
      <View style={styles.modalFooter}>
      <TouchableOpacity onPress={confirmClearHistory}>
          <MaterialIcons name="delete" size={24} color={isDark ? '#fff' : '#FF0000'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.closeButton} // Giữ style cho nút Đóng nếu cần
          onPress={() => setShowHistoryModal(false)}
        >
          <Text style={styles.closeButtonText }>Đóng</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  </View>
</Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: '#f0f0f0',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  historyToggle: {
    alignSelf: 'flex-end',
    padding: 10,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Nền mờ cho modal
  },
  modalContent: {
    width: '80%', // Chiều rộng của modal
    padding: 20,
    borderRadius: 10,
    // Style cho nền sáng và tối đã có ở trên
  },
  modalHeader: {
    marginBottom: 15,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    // Style cho màu chữ sáng và tối đã có ở trên
  },
  modalFooter: { // *** STYLE MỚI ***
    flexDirection: 'row', // Sắp xếp các phần tử theo hàng ngang
    justifyContent: 'space-between', // Canh đều khoảng cách giữa các phần tử (hoặc 'flex-end', 'center', 'flex-start' tùy ý)
    alignItems: 'center', // Căn giữa theo chiều dọc
    marginTop: 15, // Khoảng cách với danh sách lịch sử
  },
  closeButton: {
    // Các style cho nút Đóng (ví dụ: padding, background color...)
    padding: 10,
    // backgroundColor: '#ddd', // Ví dụ
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 18,
    fontStyle: 'italic'
    // Style màu chữ cho nút Đóng
  },
  historyItem: {
    paddingVertical: 5,
  },
  historyText: {
    fontSize: 16,
    textAlign: 'left',
    color: '#555',
  },
  displayContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  expression: {
    fontSize: 30,
    textAlign: 'right',
    marginBottom: 5,
    minHeight: 40,
  },
  result: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'right',
    minHeight: 60,
  },
  buttonGrid: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 60,
  },
  lightButton: {
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  darkButton: {
    backgroundColor: '#333',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '500',
  },
  lightText: {
    color: '#333',
  },
  darkText: {
    color: '#fff',
  },
  operatorButtonText: {
    color: '#ff8c00',
    fontSize: 28,
  },
  actionButtonText: {
    color: '#5e8dff',
    fontSize: 22,
  },
});
