import { Flex, Center, Image, Box, Heading, Text } from '@chakra-ui/react';
// import IconWedding from '../../../../assets/javaGold/navy-gloom-round-flower.webp';
// import IconPassPort from '../../../../assets/passPort/pass-port-round-flower.webp';
// import IconWedding from '../../../../assets/pinkPeony/pink-peony-round-flower.webp';
// import IconWedding from '../../../../assets/rusticWeddingBloom/rustic-wedding-round-flower.webp';
// import IconWedding from '../../../../assets/javaGold/java-gold-round-flower.webp';
// import IconWedding from '../../../../assets/greenFlow/green-flow-round-flower.webp';
import IconWedding from '../../../../assets/leafyBloom/leafy-gloom-round-flower.webp';
import { motion } from 'framer-motion';

import {
  fadeInRight,
  fadeInTopToBottom,
  scaleUp,
} from '../../../../utils/animation';
import moment from 'moment';
import { useState, useEffect } from 'react';
import 'moment/dist/locale/id';
import MotionButton from '../../../motion/motionButton';
import { pathImageToUrl } from '../../../../utils/url';
import useGuest from '../../../../hooks/useGuest';
import { useTemplate } from '../../../../hooks/useTemplate';
import { useLocation, useNavigate } from 'react-router-dom';
import useQueryParams from '../../../../hooks/useQueryParams';

const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionText = motion(Text);

const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 90,
    repeat: Infinity,
    ease: 'linear',
  },
};

function Countdown({ weddingAt }) {
  const [now, setNow] = useState(moment.now());
  const day = weddingAt.diff(now, 'day');
  const hour = weddingAt.diff(now, 'hour') % 24;
  const minute = weddingAt.diff(now, 'minute') % 60;
  const second = weddingAt.diff(now, 'second') % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(moment.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const extractedPart = pathParts[pathParts.length - 1];

  return (
    <Flex maxW="full">
      <Box
        py="0.5rem"
        width="90px"
        bg="greenFlow.500"
        borderRadius="16px"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
        color="white"
        margin="10px"
      >
        <Text fontSize="1.5rem" fontFamily="PoppinsRegular">
          {day}
        </Text>
        <Text fontSize="0.8rem" fontFamily="PoppinsRegular">
          Hari
        </Text>
      </Box>
      <Box
        py="0.5rem"
        width="90px"
        bg="greenFlow.500"
        borderRadius="16px"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
        color="white"
        margin="10px"
      >
        <Text fontSize="1.5rem" fontFamily="PoppinsRegular">
          {hour}
        </Text>
        <Text fontSize="0.8rem" fontFamily="PoppinsRegular">
          Jam
        </Text>
      </Box>
      <Box
        py="0.5rem"
        width="90px"
        bg="greenFlow.500"
        borderRadius="16px"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
        color="white"
        margin="10px"
      >
        <Text fontSize="1.5rem" fontFamily="PoppinsRegular">
          {minute}
        </Text>
        <Text fontSize="0.8rem" fontFamily="PoppinsRegular">
          Menit
        </Text>
      </Box>
      <Box
        py="0.5rem"
        width="90px"
        bg="greenFlow.500"
        borderRadius="16px"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
        color="white"
        margin="10px"
      >
        <Text fontSize="1.5rem" fontFamily="PoppinsRegular">
          {second}
        </Text>
        <Text fontSize="0.8rem" fontFamily="PoppinsRegular">
          Detik
        </Text>
      </Box>
    </Flex>
  );
}

function IconArrowBottom() {
  return (
    <motion.svg
      animate={{ y: [0, 8, 0] }} // Moves up and down in a loop
      transition={{ duration: 2, repeat: Infinity }} // Animation duration and repeat
      width="28"
      height="37"
      viewBox="0 0 28 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 1V35.5M14 35.5L1 22.5M14 35.5L27 22.5"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

export default function Hero({
  isOpening = false,
  openInvitation,
  weddingAt,
  imageUrl,
  nicknameFirst,
  nicknameLast,
  scroll,
}) {
  const { pathname } = useLocation();
  const { template } = useTemplate();
  const { data: guest } = useGuest();
  const guestName = useQueryParams().get('guest');
  const weddingAtDate = moment(weddingAt);
  const navigate = useNavigate();
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const extractedPart = pathParts[pathParts.length - 1];

  const handleOpenInvitationAndMusic = () => {
    openInvitation();
  };

  if (guest == null) {
    navigate('/notfound');
  }

  return (
    <Box minH="100vh">
      <Center>
        <MotionImage
          animate={rotateAnimation}
          initial={{ rotate: 0 }}
          src={ IconWedding}
          mt="16vh"
          borderRadius="full"
          boxSize="clamp(14.75rem, 30vh, 18.75rem)"
          alt="Icon Wedding"
        />

        <Box
          position="absolute"
          mt="16vh"
          borderRadius="full"
          boxSize="clamp(7rem, 16vh, 11rem)"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundImage={
            pathname.includes('/wedding/') ||
            pathname == `/templates/${template.path}`
              ? isOpening
                ? pathImageToUrl(imageUrl)
                : imageUrl
              : imageUrl
          }
          alt="Image Wedding"
        ></Box>
      </Center>
      {extractedPart === 'Toni_Ema' ? (
        <>
          <MotionHeading
            {...fadeInTopToBottom}
            as="h1"
            fontSize="clamp(1rem, 1vw, 1.5rem)"
            textAlign="center"
            variant="rusticWeddingBloomH1Poppins"
            letterSpacing="0.35rem"
            color={
              extractedPart === 'Toni_Ema' && isOpening
                ? '#FFFFFF'
                : extractedPart === 'Toni_Ema'
                ? 'passPort.500'
                : 'greenFlow.500'
            }
          >
            PASSPORT
          </MotionHeading>
          <MotionHeading
            {...fadeInTopToBottom}
            as="h1"
            fontSize="clamp(1rem, 1vw, 1rem)"
            textAlign="center"
            variant="rusticWeddingBloomH1Poppins"
            letterSpacing="0.35rem"
            mb="1rem"
            color={
              extractedPart === 'Toni_Ema' && isOpening
                ? '#FFFFFF'
                : extractedPart === 'Toni_Ema'
                ? 'passPort.500'
                : 'greenFlow.500'
            }
          >
            Wedding Invitation
          </MotionHeading>
        </>
      ) : (
        <MotionHeading
          {...fadeInTopToBottom}
          as="h1"
          fontSize="clamp(1rem, 1vw, 1.5rem)"
          textAlign="center"
          variant="rusticWeddingBloomH1Poppins"
          color="white"
          letterSpacing="0.35rem"
        >
          THE WEDDING OF
        </MotionHeading>
      )}
      <MotionHeading
        {...fadeInTopToBottom}
        mt="1rem"
        transition={{ duration: 1, delay: 1.5 }}
        as="h1"
        textAlign="center"
        variant="rusticWeddingBloomH1RoyalWedding"
        color={'greenFlow.500'}
        fontSize="clamp(3.5rem, 5.5vw, 4.5rem)"
      >
        {`${nicknameFirst} & ${nicknameLast}`}
      </MotionHeading>
      {isOpening && (
        <>
          <MotionText
            {...fadeInRight}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                delay: 2,
              },
            }}
            fontSize="md"
            textAlign="center"
            fontFamily="PoppinsRegular"
            color="white"
          >
            Kepada Yth.
          </MotionText>
          <MotionText
            {...fadeInRight}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                delay: 2,
              },
            }}
            fontSize="xl"
            textAlign="center"
            fontFamily="PoppinsSemibold"
            color="white"
          >
            {guestName ? guestName : 'Tamu Undangan'}
          </MotionText>
          <Center mt="5.2rem">
            <MotionButton
              {...scaleUp}
              variant="rusticWeddingBloom"
              background="greenFlow.500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleOpenInvitationAndMusic}
            >
              Buka Undangan
            </MotionButton>
          </Center>
        </>
      )}
      {!isOpening && (
        <>
          <Center>
            <Text fontFamily="PoppinsRegular" fontSize="sm" my="0.5rem" color="white">
              {weddingAtDate.locale('id').format('dddd, D MMMM YYYY')}
            </Text>
          </Center>
          <Center>
            <Countdown weddingAt={weddingAtDate} />
          </Center>

          <Box onClick={scroll}>
            <Center p="1rem" mt="1rem">
              <IconArrowBottom />
            </Center>
            <Text
              textAlign="center"
              fontFamily="PoppinsRegular"
              fontSize="xs"
              mb="2rem"
              color="white"
            >
              Scroll Down
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
}
