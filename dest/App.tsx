const App = () => {
  return (
    <div>
      {process.env.NODE_ENV} <b>{process.env.name}</b>
    </div>
  );
};

export default App;
