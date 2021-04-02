import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Card } from './src/components';
import { stylertTheme } from './src/theme';

const App = () => {
  // style={{ backgroundColor: '#17202A' }}
  return (
    <>
      <StatusBar backgroundColor="#17202A" />
      <SafeAreaView>
        <View>
          <ThemeProvider theme={stylertTheme}>
            <Card amount="R$100,00" status={"PAGO"} />
            <Card amount="R$250,00" status={"EM_ABERTO"} />
            <Card amount="R$150,00" status={"EM_ATRASO"} />
            <Card amount="R$300,00" status={"REVERTIDO"} />
          </ThemeProvider>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
