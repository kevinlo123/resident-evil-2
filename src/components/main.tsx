import * as React from 'react';
import '../stylesheets/main.scss';


class MainEntrance extends React.Component <any, any> {

  public countries: string[] = [
    'Select Language',
    'English (US)',
    'English (UK)',
    'French',
    'Italian',
    'German',
    'Spanish',
    '繁體中文',
    '한국어',
    'Japanese'
  ];

  public displayList = this.countries.map((country, index)=>{
    return (
      <li key={index}>
        {country}
      </li>
    );
  });

  constructor(props: any){
    super(props);
    this.state = {
      showCountries: false,
      verifyAge: false
    };
    this.show = this.show.bind(this);
    this.ageAuthentication = this.ageAuthentication.bind(this);    
  }

  public show(event: any) : void {
    if(!this.state.showCountries){
      this.setState({
        showCountries: true
      })
    }else{
      this.setState({
        showCountries: false
      })
    }
  }

  public ageAuthentication(event: any) : void  {
    this.setState({
      verifyAge: true
    })
  }

  public render() { 
    return (
      <div className="App">
        <h1>Main component</h1>
        <button onClick={this.show}>join</button>
        {
        this.state.showCountries ?
          <div>
            <ul onClick={this.ageAuthentication} >
              {this.displayList}
            </ul>
          </div>
        :
          <div />
        }
        {
        this.state.verifyAge ?
          <div>
            <h1>verify your age</h1>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <button>Enter</button>
          </div>
        :
          <div />
        }
      </div>
    );
  }
}

export default MainEntrance;