export default function Project() {
  return (
    <div>
      <div className="w-[1921px] h-[794px] px-[220px] py-[140px] text-[#043873] gap-[10px] flex items-center justify-between">
        <div className="w-[1480px] h-[547px] bg-white flex justify-between items-center ">
          <div className="w-[672px] h-[411px] gap-[60px] flex flex-col">
            <div className="h-[288px] gap-[24px] flex flex-col ">
              <h1 className="font-inter text-[72px] font-[700] leading-[87.14px] tracking-tight text-[#212529]">Project Management</h1>
              <p className="font-inter text-[18px] font-[400] leading-[30px] tracking-tight">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
            </div>
            <button className="bg-[#4F9CF9] w-[201px] h-[63px] rounded-lg py-[20px] px-[40px] flex flex-row items-center justify-between">
            <div className="font-inter text-[18px] font-[500] leading-[23px] text-white">Get Started</div>
            <img src="/Arrow.png" alt="Logo" className="w-[10px] h-[10px]" />
        </button>
          </div>
          <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
        </div>
      </div>
    </div>
  );
}
