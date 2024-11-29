import { AspectRatio, Box } from '@chakra-ui/react';
import ImageGallery from '../imageGallery';
import { useRef, useEffect } from 'react';
import { useInView, useAnimation } from 'framer-motion';
import MotionBox from '../../../motion/motionBox';
import MotionHeading from '../../../motion/motionHeading/motionHeading';
import { fadeInTop, mainBox } from '../../../../utils/animation';
import { convertToEmbedUrl } from '../editableView/ourMoment';

export default function OurMomentRusticWeddingBloom({ moment }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('animate');
    }
  });
  return (
    <MotionBox
      p="1.5rem"
      borderRadius="1.5rem"
      bg="bgWhiteOp80.50"
      mb="1.5rem"
      variants={mainBox}
      initial="initial"
      animate={mainControls}
    >
      <MotionHeading
        variants={fadeInTop}
        textAlign="center"
        variant="rusticWeddingBloomMolgakClassy"
color="greenFlow.500"
        mb="1rem"
      >
        Our Moment
      </MotionHeading>
      {moment.videos.map((video, index) => {
        if (video != '') {
          return (
            <AspectRatio
              key={index}
              minW="100%"
              ratio={16 / 9}
              rounded="lg"
              overflow="hidden"
            >
              <iframe
                title="naruto"
                src={convertToEmbedUrl(video)}
                allowFullScreen
              />
            </AspectRatio>
          );
        }
      })}
      <Box ref={ref}></Box>
      <Box mt="1.125em">
        <ImageGallery imgArray={moment.images} columnWidth={126} gapSize={18} />
      </Box>
    </MotionBox>
  );
}