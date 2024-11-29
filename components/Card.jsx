import placeholder from "../src/assets/img/placeholder.png";
import Button from "../components/Button/Button";
export default function Card() {
  return (
    <>
      <div className="card w-75 mx-auto shadow-lg">
        <div>
          <img
            className="card-img-top img-fluid"
            src={placeholder}
            alt="Card image cap"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title fs-2">Titolo del post</h5>
          <p className="card-text fs-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae
            quaerat error id dolorem, veritatis cumque impedit laudantium
            deserunt sunt molestias facere asperiores soluta enim vitae
            provident, autem delectus aliquam.
          </p>
          <button className="text-light bg-warning border-0 py-3 px-4">
            LEGGI DI PIÚ
          </button>
          <Button />
        </div>
      </div>
    </>
  );
}
