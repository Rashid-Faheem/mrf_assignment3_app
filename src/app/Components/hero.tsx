export default function Hero() {
  return (
      <div>
      <div className="w-[1921px] h-[829px] px-[220px] py-[140px] bg-[#043873] gap-[10px] text-white flex items-center justify-between">
        <div className="w-[656px] h-[361px]  ">
        <h2 className="font-inter text-[64px]  font-[700] leading-[77.45px] ">Get More Done with whitepace</h2>
        <p className="font-inter text-[18px] font-[400] leading-[30px] pt-[24px]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
        <button className="bg-[#4F9CF9] mt-[60px] w-[219px] h-[63px] rounded-lg p-[20px] flex flex-row items-center justify-between">
            <div className="font-inter text-[18px] font-[500] leading-[23px]">Try Whitepace free</div>
            <img src="/Arrow.png" alt="Logo" className="w-[10px] h-[10px]" />
        </button>
        </div>
      <div className="w-[824px] h-[549px] bg-[#C4DEFD]"> </div>
      </div>
    </div>
  );
}
