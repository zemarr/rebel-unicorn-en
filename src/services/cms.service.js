import axios from "axios";

const baseurl = `${process.env.VUE_APP_CMS_BASEURL}`;
const url = `${baseurl}`;
class CMSService {
  static getAllDataByLocale(locale) {
    console.log(locale);
    return axios.get(
      `${url}main-page?locale=${locale}&populate[0]=mainHeading.mainHeroImage&populate[1]=mainHeading.mainHeroCTA&populate[2]=ServicesComponent&populate[3]=ServicesComponent.servicesAccordion&populate[4]=ServicesComponent.servicesImage&populate[5]=CoachingComponent.coachActivity&populate[6]=CoachingComponent.coachesCTA&populate[7]=CoachingComponent.coachingImage&populate[8]=SuccessComponent.coachActivity&populate[9]=SuccessComponent.successesCTA&populate[10]=TestimonialComponent&populate[11]=TestimonialComponent.testimonialsCTA&populate[12]=LearnMoreComponent.officeAddress&populate[13]=LearnMoreComponent.privacy&populate[14]=LearnMoreComponent.copyright&populate[15]=CoachPage&populate[16]=SuccessPage&populate[17]=TestimonialPage&populate[18]=NavComponent`
    );
  }
}

export default CMSService;
