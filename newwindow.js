import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useState} from 'react';

export default function NewWindow(){
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [gameResult, setGameResult] = useState(null);
    

}