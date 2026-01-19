import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {robots.map((user) => (
        <Card key={user.id} id={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
};

export default CardList;
