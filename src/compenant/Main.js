const Main = ({ switchValue, setSwitch }) => {
  return (
    <div className="bouton">
      <button
        onClick={() => {
          setSwitch(true);
        }}
        style={{
          backgroundColor: switchValue === true ? "green" : "grey",
          textAlign: "center",
        }}
      >
        On
      </button>
      <button
        onClick={() => {
          {
            setSwitch(false);
          }
        }}
        style={{
          backgroundColor: switchValue === false ? "red" : "grey",
          textAlign: "center",
        }}
      >
        Off
      </button>
    </div>
  );
};

export default Main;
