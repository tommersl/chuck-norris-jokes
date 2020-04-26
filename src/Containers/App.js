import React from 'react';
import './App.css';
import ChuckjokesCategoryDisplay from '../Components/chuckjokescategorydisplay';
import ChuckjokesCategoryList from '../Components/chuckjokescategorylist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoryDisplay: false,
      joke: '',
    }
  }

  fetchCategories() {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(response => response.json())
      .then(json => {
        this.setState({ categories: json });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchCategories();
  }
  loadARandomJoke(category){
    fetch('https://api.chucknorris.io/jokes/random?category='+ category)
    .then(response => response.json())
    .then(json => {
      this.setState({ joke: json.value });
    })
    .catch(err => console.log(err));
   
  }
  onCategoryDisplayClick(event) {
    this.setState({
      categoryDisplay: true,
      joke: this.loadARandomJoke(event.target.value),
    });

  }

  render() {
    if (!this.state.categories.length) {
      return <h1>Loading...</h1>
    }
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Chuck Norris Jokes</h1>
          <h2>Click on a category of the folowing choices</h2>
        </header>

        <ChuckjokesCategoryList
          categories={this.state.categories}
          onClick={this.onCategoryDisplayClick.bind(this)}
        />
        <ChuckjokesCategoryDisplay
          categoryDisplay={this.state.categoryDisplay}
          joke={this.state.joke}
        />
      </div>
    );
  }
}
export default App;
