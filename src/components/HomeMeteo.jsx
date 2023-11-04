import PrevisionCity from "./PrevisionCity";

const HomeMeteo = () => {
  return (
    <div>
      <PrevisionCity lat={45.46} long={9.18} />
      <PrevisionCity lat={41.93} long={12.43} />
      <PrevisionCity lat={51.507351} long={-0.127758} />
      <PrevisionCity lat={41.93} long={12.43} />
    </div>
  );
};

export default HomeMeteo;
