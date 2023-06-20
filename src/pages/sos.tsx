import FlatList from "@/components/flatList";
import { usePopup } from "@/lib/context/popup";
import Doctor from "@/lib/popup/doctor";
import Emergency from "@/lib/popup/emergrency";
export default function Sos() {
  const { setPopupContent, showPopup } = usePopup();
  const data = [
    {
      text: "ЭМНЭЛГИЙН АНХАН ШАТНЫ ТУСЛАМЖ",
      onClick: () => {
        setPopupContent(<Doctor />);
        showPopup(true);
      },
    },
    {
      text: "ТУСЛАМЖ",
      onClick: () => {
        setPopupContent(<Emergency />);
        showPopup(true);
      },
    },
  ];
  return (
    <div className="p-4 grid grid-cols-1 gap-y-2">
      {data.map((data, key) => {
        return <FlatList onClick={data.onClick} text={data.text} key={key} />;
      })}
    </div>
  );
}
