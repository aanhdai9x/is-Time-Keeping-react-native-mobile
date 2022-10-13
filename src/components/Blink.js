import { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../Constant/Constant";

export default function Blink({ text }) {
  const [showText, setShowText] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((showText) => !showText)
    }, 500)  // 1000 = 1s

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    showText ? <Text style={styles.blinkText}>{text}</Text > : <Text style={styles.blinkText}></Text>
  );

}

const styles = StyleSheet.create({
  blinkText: {
    fontSize: 25,
    fontWeight: '500',
    color: COLORS.light_grey,
  },
});