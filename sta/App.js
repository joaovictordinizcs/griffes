import React from 'react';
import { Button, View, Text, Image, ScrollView, TouchableOpacity, TextInput, StyleSheet, ViewBase} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
  return (
    <ScrollView>

      <View style={{ flexDirection: 'column', margin: 35, alignItems:'center' }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#808080' }}>
            SEMANA DE PROMOÇÃO
            </Text>
        </View>
        <View style={{ flexDirection: 'column', margin: 55, alignItems:'center', alignContent:'center', marginTop:-30 }}>
          <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'black' }}>
            DESCONTOS DE ATE 50%
            </Text>
        </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Image
            style={{ width: 660, height: 220, marginTop: 90, borderRadius: 6 }}
            source={require('./src/imagem/LOGO.jpg')}
          />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'darkblue' }}></Text>
        </View>
        <View style={{ flexDirection: 'column', margin: 35 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#00BFFF' }}>ROUPAS MASCULINAS</Text>
        </View>
        <View style={{alignContent:'center', alignItems:'flex-end', alignSelf:'center'}}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginBottom: 20 }}>
          <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('Masculino')}>
            <View>
              <Image
                style={{ width: 145, height: 145, borderRadius: 20, marginTop: 10, marginBottom: 10, marginLeft:30 }}
                source={require('./src/imagem/GUCCI.jpg')}
              />
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft:25 }}>camiseta gucci</Text>
            </View>
            <View>
              <Text style={{marginLeft:30}}>
                preço: R$:250,00
              </Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.navigate('Masculino2')}>
            <View>
              <Image
                style={{ width: 145, height: 145, borderRadius: 20, marginTop: 10, marginBottom: 10, marginLeft:20}}
                source={require('./src/imagem/DOU.jpg')}
              />
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft:10 }}>camiseta d&g</Text>
            </View>
            <View>
              <Text style={{marginLeft:10}}>
                preço: R$:390,00
              </Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 35}} onPress={() => navigation.navigate('Masculino3')}>
            <View>
              <Image
                style={{ width: 145, height: 145, borderRadius: 20, marginTop: 10, marginBottom: 10, marginLeft:20}}
                source={require('./src/imagem/LUIS.jpg')}
              />
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginRight:10 }}>camiseta louis vuitton</Text>
            </View>
            <View>
              <Text>
                preço: R$:650,00
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
        <View style={{ flexDirection: 'column', margin: 35 }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#00BFFF' }}>roupas femininas</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginBottom: 20 }}>
          <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('Feminino')}>
            <View>
              <Image
                style={{ width: 145, height: 145, borderRadius: 20, marginTop: 10, marginBottom: 10 }}
                source={require('./src/imagem/pra.jpg')}
              />
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', alignContent:'center' }}>blusa prada</Text>
            </View>
            <View>
              <Text>
                preço: R$:550,00
              </Text>

            </View>

          </TouchableOpacity>
          
          <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.navigate('Feminino2')}>
            <View>
              <Image
                style={{ width: 145, height: 145, borderRadius: 20, marginTop: 10, marginBottom: 10 }}
                source={require('./src/imagem/didi.jpg')}
              />
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black',alignContent: 'center' }}>blusa dior</Text>
            </View>
            <View>
              <Text>
                preço: R$:750,00
              </Text>

            </View>

          </TouchableOpacity>
        </View>
      </View>
      <View>

      <View>
        <Text style={{margin: 98, marginRight:15, fontSize:25, color:'black',}}>
          Bem vindos a Griffes Outlet
        </Text>
        <View style={{margin: 100, marginTop:-75, alignItems:'flex-start'}}>
          <Text style={{fontSize:15}}>
          Bem-vindo à Griffes Outlet, a sua nova marca de roupas que une estilo e acessibilidade. Somos uma empresa dedicada a oferecer peças de moda de alta qualidade a preços acessíveis, para que todos possam se vestir com estilo e confiança.

Nossa missão é proporcionar uma experiência de compra única, onde você encontrará uma ampla variedade de roupas e acessórios das melhores marcas, com descontos incríveis. Na Griffes Outlet, acreditamos que estar na moda não precisa ser caro, e por isso buscamos parcerias com renomadas grifes para trazer as últimas tendências a preços irresistíveis.
          </Text>
          <View>
            <Image>

            </Image>
          </View>
        </View>
        </View>

        <View style={{ alignItems: 'flex-start', width: 600 }}>
  <Image
    style={{ width: '100%', height: 210, borderRadius: 6, resizeMode: 'stretch' }}
    source={require('./src/imagem/grife.jpg')}
  />
</View>

         <View>
        <Text style={{margin: 98, marginRight:15, fontSize:25, color:'black',fontSize:30, }}>
          QUEM SOMOS NÓS?
        </Text>
        
        <View>
        <Text style={{margin: 100, alignItems:'center', marginTop:-90, fontSize:15}}>
        Griffes Outlet - Moda Acessível e Estilo de Vida
        Na Griffes Outlet, somos mais do que uma marca de roupas, somos um estilo de vida.
        Nosso objetivo é proporcionar a todos a oportunidade de se vestir com elegância e sofisticação, sem comprometer o orçamento.
        Combinamos moda de alta qualidade, preços acessíveis e um atendimento excepcional para oferecer uma experiência de compra única.
        Acreditamos que todos merecem ter acesso às últimas tendências e marcas renomadas, 
        independentemente do seu orçamento.
        </Text>
          <View>
          </View>
        </View>
        </View>

        <View style={{alignItems:'flex-end', marginRight:60,}}>
        <Image
            style={{ width: 400, height: 120, marginTop: 90, borderRadius: 6, marginTop:-85, alignItems:'center', alignContent:'center', marginRight:20}}
            source={require('./src/imagem/quem.png')}
          />
         </View>

<View style={{marginBottom:10,}}>
  <View>
    <Text style={{ fontSize: 20,marginTop:20, marginLeft:20, color:'black' }}>ESTAMOS LOCALIZADOS:</Text>
  </View>
  <View>
    <Text style={{marginLeft:20, color:'black'}}>NO CENTRO DE CAMPO GRANDE MS</Text>
  
</View>
</View>
  <View style={{marginTop:-20, borderBottomWidth: 10, borderBottomColor: 'blue', alignContent:'center', width: '100%', marginTop:50, marginBottom:20,}}>
    <Text style={{marginTop:-45, marginLeft:20, color:'black' }}>AV AFONSO PENA 10</Text>
  </View>

<View style={{fontSize:20, marginLeft:11}}>
  <View style={{marginTop:200}}>
  <Image
  style={{ width: 160, height:70, borderRadius: 6, marginTop:-207, alignItems:'center', marginLeft:10, marginBottom:50}}
            source={require('./src/imagem/redess.jpg')}>
  </Image>
  </View>  
</View>


<View style={{fontSize:5, marginLeft:11, alignItems:'flex-end', marginBottom:20, marginTop:-50, marginRight:20,}}>
  
  <View style={{marginTop:200}}>
  <Image
  style={{ width: 160, height: 70, borderRadius: 1, marginTop:-359, alignItems:'center', marginLeft:10, marginBottom:50}}
            source={require('./src/imagem/cc.png')}>
  </Image>
  </View>  
</View>  

<View style={{marginBottom:-250}}>
</View>

<View style={{marginBottom:90,}}> 
  <Text style={{marginBottom:-100, fontSize:20, color:'black', marginLeft: 13, marginTop:-50}}>sigam as nossas redes socias</Text>
</View>

<View style={{marginBottom:90,}}> 
  <Text style={{marginBottom:-100, fontSize:20, color:'black', marginLeft:420, marginTop:-130}}>nossas formas de pagamento</Text>
</View>

<View>
<Image style={{ width: '100%', height: 110, marginTop:-130}}
  source={require('./src/imagem/mapa.png')}>
  </Image>
</View>

<View>
  <Text style={{marginTop:-160, marginLeft:200, fontSize:20}}>
    NOSSA LOCALIZAÇÃO
  </Text>
</View>

    </View>
    </ScrollView>
  );
}

function Masculino3(){
  return(
    <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
       style={{ width: 420, height: 400, borderRadius: 20, marginTop: 10, marginBottom: 10 }}
       source={require('./src/imagem/LUIS.jpg')}
      />
     <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>camiseta louis vuitton</Text>
     <Text>As camisetas louis vuitton são feitas com materiais premium,</Text>
      <Text>como algodão de alta qualidade ou misturas de tecidos luxuosos e sedas.</Text>
      <Text> Esses materiais garantem conforto e durabilidade.</Text>
      <Text>tamanho: P AO G</Text>
      <Text style={{color:'red'}}>SOMENTE CORES PRETA E BRANCAS DISPONIVEIS</Text>
      </View>
  
  );
}

function Masculino2(){
  return(
    <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
       style={{ width: 350, height: 380, borderRadius: 20, marginTop: 10, marginBottom: 10 }}
       source={require('./src/imagem/DOU.jpg')}
      />
       <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>camiseta dolce % gabbana</Text>
      <Text>As camisetas D%G são feitas com materiais premium,</Text>
      <Text>como algodão de alta qualidade ou misturas de tecidos luxuosos.</Text>
      <Text>tamanho: M AO G</Text>
      <Text style={{color:'red'}}>SOMENTE CORES PRETA E BRANCAS DISPONIVEIS</Text>
      </View>
  
  );
}

function Masculino() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={{ width: 460, height: 420, borderRadius: 20, marginTop: 10, marginBottom: 10 }}
        source={require('./src/imagem/GUCCI.jpg')}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'darkblue' }}>camiseta gucci</Text>
      <Text>As camisetas Gucci são feitas com materiais premium,</Text>
      <Text>como algodão de alta qualidade ou misturas de tecidos luxuosos.</Text>
      <Text>tamanho: M AO G</Text>
      <Text style={{color:'red'}}>SOMENTE CORES PRETA E BRANCAS DISPONIVEIS</Text>
    </View>
  );
}

function Feminino() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={{ width: 405, height: 400, borderRadius: 20, marginTop: 10, marginBottom: 10 }}
        source={require('./src/imagem/pra.jpg')}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'darkblue' }}>blusa prada</Text>
      <Text>As camisetas da Prada são feitas com materiais premium,</Text>
      <Text>como algodão de alta qualidade ou misturas de tecidos luxuosos.</Text>
      <Text>tamanho: M AO G</Text>
      <Text style={{color:'red'}}>SOMENTE CORES PRETA E BRANCAS DISPONIVEIS</Text>
    </View>
  );
}

function Feminino2() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={{ width: 405, height: 400, borderRadius: 20, marginTop: 10, marginBottom: 10 }}
        source={require('./src/imagem/didi.jpg')}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'darkblue' }}>blusa dior</Text>
      <Text>As camisetas da D são feitas com materiais premium,</Text>
      <Text>como algodão de alta qualidade ou misturas de tecidos luxuosos.</Text>
      <Text>tamanho: M AO G</Text>
      <Text style={{color:'red'}}>SOMENTE CORES PRETA E BRANCAS DISPONIVEIS</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="GRIFFES OUTLET"
          component={HomeScreen}
          options={{
            headerTitle: (props) => (
              <ScrollView>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'white' }}>GRIFFES OUTLET</Text>
                <Text style={{ fontSize: 19, color: 'black', marginLeft: 20, borderRadius: 5, alignContent:'center'}}>Promoções</Text>
                <Text style={{ fontSize: 19, color: 'black', marginLeft: 20, borderRadius: 5, alignContent:'center'}}>masculino</Text>
                <Text style={{ fontSize: 19, color: 'black', marginLeft: 20, borderRadius: 5, alignContent:'center'}}>feminino</Text>
                <TouchableOpacity>
                  <Text style={{ fontSize: 22, color: 'black', marginLeft: 15, borderRadius: 5, alignContent:'center'}} >
                    buscar
                  </Text>
                </TouchableOpacity>

              </View>
              </ScrollView>
            ),
            headerStyle: {
              backgroundColor: 'lightblue',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen name="Masculino" component={Masculino} />
        <Stack.Screen name="Masculino2" component={Masculino2} />
        <Stack.Screen name="Masculino3" component={Masculino3} />
        <Stack.Screen name="Feminino" component={Feminino} />
        <Stack.Screen name="Feminino2" component={Feminino2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
