"use client";

import Button from "@/components/general/button";

const DownloadCV: React.FC = () => {
  return (
    <Button
      onClick={() =>
        window?.open("/files/David_Uchenna_senior_frontend_Developer.pdf", "_blank")
      }
    >
      Download CV
    </Button>
  );
};

export default DownloadCV;
