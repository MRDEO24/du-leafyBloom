import { Box, Heading, Text, useToast } from '@chakra-ui/react';
import MotionBox from '../../../motion/motionBox';
import { useRef, useEffect } from 'react';
import { useInView, useAnimation, useAnimationControls } from 'framer-motion';
import MotionHeading from '../../../motion/motionHeading/motionHeading';
import { fadeInRight, fadeInTop, mainBox } from '../../../../utils/animation';
import MotionButton from '../../../motion/motionButton';

export default function WeddingGift({ weddingGifts }) {
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
      variants={mainBox}
      initial="initial"
      animate={mainControls}
      p="1.5rem"
      borderRadius="1.5rem"
      bg="bgWhiteOp80.50"
      my="2rem"
    >
      <MotionHeading
        textAlign="center"
        my="1rem"
        variant="rusticWeddingBloomMolgakClassy"
color="greenFlow.500"
        variants={fadeInTop}
      >
        Wedding Gift
      </MotionHeading>
      <Text
        ref={ref}
        textAlign="center"
        variant="rusticWeddingBloomText"
        my="1rem"
      >
        {weddingGifts.titleGift}
      </Text>
      {weddingGifts.giftWedding.map((weddingGift, index) => {
        return (
          <MotionBox key={index} variants={fadeInRight}>
            {weddingGift.is_bank ? (
              <WeddingBank
                bankName={weddingGift.gift_title}
                bankAccount={weddingGift.gift_address}
                receiver={weddingGift.gift_subtitle}
              />
            ) : (
              <GiftAddress
                title={weddingGift.gift_title}
                address={weddingGift.gift_address}
                receiver={weddingGift.gift_subtitle}
              />
            )}
          </MotionBox>
        );
      })}
    </MotionBox>
  );
}

function WeddingBank({ bankName, bankAccount, receiver }) {
  const toast = useToast({
    duration: 2000,
    isClosable: true,
    status: 'success',
  });
  const controls = useAnimationControls();

  return (
    <MotionBox
      bg="#F1EAE0"
      textAlign="center"
      p="1rem"
      borderRadius="1.5rem"
      mb="1rem"
    >
      <MotionHeading as="h2" variant="rusticWeddingBloomH1Poppins">
        {bankName}
      </MotionHeading>
      <Text my="0.5rem" fontFamily="PoppinsRegular">
        {bankAccount}
      </Text>
      <Text my="0.5rem" fontFamily="PoppinsRegular">
        {receiver}
      </Text>
      <MotionButton
        scale={1}
        variant="rusticWeddingBloom"
        bg="greenFlow.500"
        my="0.5rem"
        letterSpacing="widest"
        cursor="pointer"
        animate={controls}
        onClick={async () => {
          controls.start({
            scale: [1, 1.1, 1, 1.1, 1],
            rotate: [0, 10, -10, 10, -10, 0],
          });
          await navigator.clipboard.writeText(bankAccount);
          toast({
            title: 'Nomor Rekening',
            description: 'Salin nomor berhasil',
          });
        }}
      >
        Salin Rekening
      </MotionButton>
    </MotionBox>
  );
}

function GiftAddress({ title, receiver, address }) {
  const toast = useToast({
    duration: 2000,
    isClosable: true,
    status: 'success',
  });
  const controls = useAnimationControls();

  return (
    <Box
      bg="#F1EAE0"
      textAlign="center"
      p="1.5rem"
      borderRadius="1.5rem"
      mb="1rem"
    >
      <Text my="0.5rem" fontSize="0.8rem" fontFamily="PoppinsRegular">
        {title}
      </Text>
      <Heading as="h2" fontSize="1rem" my="1.2rem" fontFamily="PoppinsSemibold">
        Penerima:<br></br>
        {receiver}
      </Heading>
      <Text my="0.5rem" fontSize="0.8rem" fontFamily="PoppinsRegular">
        {address}
      </Text>
      <MotionButton
        scale={1}
        variant="rusticWeddingBloom"
        my="0.5rem"
        letterSpacing="widest"
        cursor="pointer"
        animate={controls}
        onClick={async () => {
          controls.start({
            scale: [1, 1.1, 1, 1.1, 1],
            rotate: [0, 10, -10, 10, -10, 0],
          });
          await navigator.clipboard.writeText(address);
          toast({
            title: 'Alamat',
            description: 'Salin alamat berhasil',
          });
        }}
      >
        Salin Alamat
      </MotionButton>
    </Box>
  );
}
