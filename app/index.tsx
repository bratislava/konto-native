import { View } from 'react-native'
import { WebView } from 'react-native-webview'

const App = () => {
  return (
    <View className="w-50 h-full flex-1 items-center justify-center">
      <View className="h-full w-full">
        <WebView source={{ uri: 'https://konto.bratislava.sk' }} className="flex-1" />
      </View>
    </View>
  )
}

export default App
