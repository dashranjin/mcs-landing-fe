export default function Emergency() {
  return (
    <div className="justify-center flex flex-col items-center">
      <p className="text-center w-[270px]">
        ТАНД ЯАРАЛТАЙ ТУСЛАМЖ <br /> ХЭРЭГТЭЙ БОЛ ДАРААХ УТСАНД
        <br />
        ХОЛБОГДОНО УУ
      </p>
      <div
        className="h-[42px] w-[174px] bg-[#F1F1F1] rounded-[6px] mt-[26px] items-center justify-center flex"
        onClick={() => navigator.clipboard.writeText("88888888")}
      >
        88888888
      </div>
    </div>
  );
}
