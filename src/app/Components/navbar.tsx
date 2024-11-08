
export default function Navbar() {
    return (
        <div className="font-inter w-[1921px] px-[220px] py-[16px] h-[92px] text-white bg-[#043873]  flex flex-row items-center justify-between ">
            <div className="w-[191px] h-[34px] flex items-center justify-between ">
                <img src="/Logo.png" alt="Logo" className="w-[37px] h-[29px]" />
                <h3 className=" font-bold text-[28px] text-[#FFFFFF] leading-[34px] w-[144px] left-[47px]">whitepace</h3>
            </div>
            <div className="w-[737.5px] h-[60px] gap-[60px] flex items-center ">
                <ul className="flex gap-[32px] w-[549px]  h-[23px]  font-DM text-[18px] font-[500]">
                    <li>Products</li>
                    <li>Solutions</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                </ul>
                <div className="w-[126px] h-[60px] gap-[24px] flex items-center">
                    <button className="bg-[#FFE492] rounded-[8px] px-[40px] py-[16px]">
                        <h2 className="font-inter text-[18px] font-[500] text-[#043873]">Login</h2>
                    </button>
                </div>
            </div>
        </div>
    )
}