import * as React from 'react';
import '../stylesheets/main.scss';
import LandingPage from './landingPage';


interface IState {
  showCountries: boolean,
  verifyAge: boolean,
  userAccess: boolean
}

export default class MainEntrance extends React.Component <{} , IState> {

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

  public displayList = this.countries.map((country, index) => {
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
      userAccess: false,      
      verifyAge: false
    };
    this.show = this.show.bind(this);
    this.ageAuthentication = this.ageAuthentication.bind(this);  
    this.closeAgeVerifaction = this.closeAgeVerifaction.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 
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

  public closeAgeVerifaction(event: any) : void {
    this.setState({
      verifyAge: false
    })
  }

  public handleSubmit(event: any) : void {
    event.preventDefault(); 
    document.getElementsByClassName('container')[0].innerHTML = "";  
    setTimeout(() => {
      this.setState({
        userAccess: true
      });
    }, 1000);
  }

  public render() { 
    return (
      <div className='App'>
        <div className='container'>
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
            null
          }
          {
          this.state.verifyAge ?
            <div>
              <h1>verify your age</h1>
              <form onSubmit={this.handleSubmit} action='' method=''>
                <label htmlFor='month'>MONTH</label>
                <input maxLength={2} type='text'/>
                <label htmlFor='day'>DAY</label>
                <input maxLength={2} type='text'/>
                <label htmlFor='year'>YEAR</label>
                <input maxLength={4} type='text'/>
                <input type='submit' value='Enter'/>
              </form>
              <a onClick={this.closeAgeVerifaction} href='#'>close</a>
            </div>
          :
            null
          }
        </div>
        {
        this.state.userAccess ? 
          <div>
            <LandingPage/>
          </div>
          :
          null
        }
      </div>
    );
  }
}

