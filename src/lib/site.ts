import businessCard from "@/assets/business-card.pdf.asset.json";

export const SITE = {
  name: "Ocean Smile Dental Clinic",
  shortName: "Ocean Smile",
  tagline: "Service with a smile. Restoring a smile into your life.",
  whatsapp: "0713 276 793",
  whatsappIntl: "254713276793",
  emergency: "0739 452 765",
  emergencyIntl: "254739452765",
  email: "info@oceansmilesdentals.com",
  address: "Kisumu Road, Off Moi Avenue, Opp. Sheetal Plaza, Mombasa, Kenya",
  facebook: "https://www.facebook.com/www.oceansmile.co.ke/",
  maps: "https://www.google.com/local/place/fid/0x18401326fdb17239:0x1a5f5da859785d5f/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3DnHsogsfoqBCJJMZnu26XQA%26cb_client%3Dsearch.gws-prod.gps%26yaw%3D218.09502%26pitch%3D0%26thumbfov%3D100%26w%3D0%26h%3D0&ik=CAISFm5Ic29nc2ZvcUJDSkpNWm51MjZYUUE%3D",
  mapsEmbed:
    "https://www.google.com/maps?q=Ocean+Smile+Dental+Clinic+Mombasa&output=embed",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
    { day: "Saturday", time: "9:00 AM – 5:00 PM" },
    { day: "Sunday", time: "Emergency Only" },
  ],
  businessCardUrl: businessCard.url,
};

export const waLink = (message: string) =>
  `https://wa.me/${SITE.whatsappIntl}?text=${encodeURIComponent(message)}`;
