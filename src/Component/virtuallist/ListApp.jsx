import "./styles.css";
import VList from "./VList";
import ObserverItem from "./observer-item";
import faker from "faker";

let data = [];
for (let id = 0; id < 100; id++) {
  const item = {
    id,
    value: faker.lorem.paragraphs(), // 长文本
  };

  // if (id % 10 === 1) {
  //   item.src = faker.image.image();
  // }
  data.push(item);
} //用faker造的item数据

export default function ListApp() {
  return (
    <div className="ListApp">
      <VList list={data}>
        {({ index, item, measure }) => (
          <ObserverItem
            index={index}
            key={item.id}
            item={item}
            measure={measure}
          >
            <>
              {item.value}
              {item.src && <img src={item.src} alt="" />}
            </>
          </ObserverItem>
        )}
      </VList>
    </div>
  );
}
