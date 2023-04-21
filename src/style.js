

const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    color_1: "bg-[#181D31]",
    color_2: "bg-[#678983]",
    color_3: "bg-[#E6DDC4]",
    color_4: "bg-[#F0E9D2]",
  
    heading2: "font-poppins font-semibold sm:text-[40px] text-[28px] sm:mx-5 mx-10 md:mt-10 mt-0 text-[#104657] sm:leading-[56.8px] leading-[40.8px] w-full",
    paragraph: "font-poppins font-normal ss:mx-2 mx-5 text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  

  export const layout = {
    section: `flex justify-center item-center md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;