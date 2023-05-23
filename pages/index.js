import Dashboard from './dashboard';

const Home = (props) => {
  console.log(props)
    return (
      <>
        <Dashboard
          athleteData={props.athleteData}
          activities={props.activities}
          isDarkMode={props.isDarkMode}
        />
      </>
    );
  }

export default Home;