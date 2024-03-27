import "./Panel.css";

const PanelLayout = ({ children }: any) => {
  return (
    <div className="panel-container">
      <div className="sidebar">
        <h1>sidebar</h1>
      </div>
      <div className="main">{children}</div>
    </div>
  );
};

export default PanelLayout;
