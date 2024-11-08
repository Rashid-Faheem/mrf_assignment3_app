export default function Footer() {
  return (
    <div>
      <div className="w-[1921px]  bg-[#043873] px-[220px] pt-[140px] pb-[32px] justify-center  flex flex-col gap-[100px] ">
        <div className="h-[169px] flex gap-[100px]  text-white justify-between ">
          <div className="flex flex-col gap-[15px] w-[295px]">
            <div className="w-[191px] h-[34px] flex items-center justify-between ">
              <img src="/Logo.png" alt="Logo" className="w-[37px] h-[29px]" />
              <h3 className=" font-bold text-[28px] text-[#FFFFFF] leading-[34px] w-[144px] left-[47px]">
                whitepace
              </h3>
            </div>
            <p className="w-[240px] font-inter text-[18px] font-[400] leading-[30px] tracking-tight text-white">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>
          <div className="flex flex-col gap-[15px] w-[295px]">
            <h2 className="font-inter text-[18px] font-bold leading-[21.78px] tracking-tight  ">Product</h2>
            <h3 className="font-inter text-[16px] font-[400] leading-[20px] tracking-tight ">Overview</h3>
            <h3 className="font-inter text-[16px] font-[400] leading-[20px] tracking-tight ">Pricing</h3>
            <h3 className="font-inter text-[16px] font-[400] leading-[20px] tracking-tight ">Customer stories</h3>
          </div>
          <div className="flex flex-col gap-[15px] w-[295px]">
            <h2 className="font-inter text-[18px] font-bold leading-[21.78px] tracking-tight  ">Resources</h2>
            <h3 className="font-inter text-[16px] font-[400] leading-[20px] tracking-tight ">Blog</h3>
            <h3 className="font-inter text-[16px] font-[400] leading-[20px] tracking-tight ">Guides & tutorials</h3>
            <h3 className="font-inter text-[16px] font-[400] leading-[20px] tracking-tight ">Help center</h3>
          </div>
          <div className="flex flex-col gap-[15px] w-[295px]">
            <h2 className="font-inter text-[18px] font-bold leading-[21.78px] tracking-tight  ">Company</h2>
            <h3 className="font-inter text-[16px] font-[400] leading-[20px] tracking-tight ">About us</h3>
            <h3 className="font-inter text-[16px] font-[400] leading-[20px] tracking-tight ">Careers</h3>
            <h3 className="font-inter text-[16px] font-[400] leading-[20px] tracking-tight ">Media kit</h3>
          </div>
        </div>
        <h3 className="font-inter text-[18px] font-[400] leading-[20px] tracking-tight text-white text-center">
          ©2021 Whitepace LLC.
        </h3>
      </div>
    </div>
  );
}
