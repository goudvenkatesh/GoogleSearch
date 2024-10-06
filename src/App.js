import GoogleSuggestion from './components/GoogleSuggestion'

import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
  {id: 7, suggestion: 'India is a Most biggest Country'},
]

const App = () => <GoogleSuggestion suggestionsList={suggestionsList} />

export default App
