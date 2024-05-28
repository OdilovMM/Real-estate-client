import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  return (
    <>
      <Marker position={[item.latitude, item.longitude]}>
        <Popup>
          <div className="flex flex-row justify-between gap-2 w-[160px]">
            <img
              src={`http://localhost:5000/images/post/${item.images[0]}`}
              alt=""
              className="w-[70px]"
            />
            <div className="flex flex-col justify-normal items-start">
              <Link
                to={`/gallery/detail/${item.id}`}
                className="w-full text-[10px]"
              >
                {item.title}
              </Link>
              <span className="text-[8px]">{item.bedroom} bedroom</span>
              <b className="text-[9px]">${item.price}</b>
              <span className="text-[8px]">${item.address}</span>
            </div>
          </div>
        </Popup>
      </Marker>
    </>
  );
};

export default Pin;
