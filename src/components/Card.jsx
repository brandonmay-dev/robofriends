const Card = ({ name, email, id }) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 w5">
      <img
        alt="robots"
        src={`https://robohash.org/${id}?size=200x200`}
        className="w-100"
      />
      <div>
        <h2 className="f4">{name}</h2>
        <p className="f6">{email}</p>
      </div>
    </div>
  );
};

export default Card;
