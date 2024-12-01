'use client';
import { PLACES } from '@/lib/data/places';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent, {
	timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import {
	Box,
	Button,
	CardMedia,
	Divider,
	Modal,
	Rating,
	Stack,
	Typography,
} from "@mui/material";
import { useParams } from 'next/navigation';
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from '../reused/container/Container';
import { Limiter } from '../reused/limiter/Limiter';
export const RouteById = () => {
	const params = useParams();
	// State для модального окна
	const [openModal, setOpenModal] = useState(false);
	const handleOpen = () => setOpenModal(true);
	const handleClose = () => setOpenModal(false);
	const currentPlace = PLACES.find(item => item.id === Number(params.id));
	if (!currentPlace) {
		return (
			<Limiter>
				<Container className='pt-container'>
					<Box p={2}>
						<Typography variant="h5" fontWeight="bold" gutterBottom>
							Место не найдено
						</Typography>
					</Box>
				</Container>
			</Limiter>
		);
	}
	return (
		<Limiter>
			<Container className='pt-container'>
				<Box p={2}>
					<Typography variant="h5" fontWeight="bold" gutterBottom>
						{currentPlace.name}
					</Typography>
					<Swiper
						modules={[Navigation, Autoplay]}
						spaceBetween={10}
						slidesPerView={1}
						navigation
						autoplay={{ delay: 2000 }}
					>
						{currentPlace.images.map((image, index) => (
							<SwiperSlide key={index}>
								<CardMedia
									component="img"
									src={image}
									alt={`Slide ${index}`}
									sx={{ borderRadius: 2, height: "300px", objectFit: "cover" }}
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<Stack direction="row" alignItems="center" justifyContent="space-between" mt={2}>
						<Stack direction="row" spacing={1} alignItems="center">
							<Rating value={currentPlace.rating} precision={0.5} readOnly />
							<Typography variant="body2">({currentPlace.rating})</Typography>
						</Stack>
						<Typography variant="h6" color="primary" fontWeight="bold">
							{new Intl.NumberFormat('ru-RU', {
								style: 'currency',
								currency: 'RUB'
							}).format(currentPlace.price)}
						</Typography>
					</Stack>
					<Typography variant="body1" mt={2} gutterBottom>
						{currentPlace.description}
					</Typography>
					<Divider sx={{ my: 3 }} />
					<Typography variant="h6" fontWeight="bold" gutterBottom>
						Таймлайн
					</Typography>
					<Timeline sx={{
						[`& .${timelineOppositeContentClasses.root}`]: {
							flex: 0.2,
						},
					}}>
						{currentPlace.itinerary.map((item, index) => (
							<TimelineItem key={index}>
								<TimelineOppositeContent color="textSecondary">
									{item.time}
								</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineDot />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>{item.description}</TimelineContent>
							</TimelineItem>
						))}
					</Timeline>
					<Divider sx={{ my: 3 }} />
					<Typography variant="h6" fontWeight="bold" gutterBottom>
						Маршрут
					</Typography>
					<Typography variant="body1">{currentPlace.route}</Typography>
					<Button
						variant="outlined"
						color="primary"
						fullWidth
						onClick={handleOpen}
						sx={{ mt: 3, textTransform: "none", borderRadius: 1 }}
					>
						Забронировать
					</Button>
					{/* Модальное окно */}
					<Modal
						open={openModal}
						onClose={handleClose}
						aria-labelledby="modal-title"
						aria-describedby="modal-description"
					>
						<Box
							sx={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								width: 300,
								bgcolor: "background.paper",
								boxShadow: 24,
								borderRadius: 2,
								p: 3,
							}}
						>
							<Typography id="modal-title" variant="h6" fontWeight="bold" gutterBottom>
								Бронирование тура
							</Typography>
							<Typography id="modal-description" variant="body1" gutterBottom>
								Свяжитесь с гидом через Telegram для бронирования.
							</Typography>
							<Button
								variant="contained"
								color="primary"
								fullWidth
								href="https://t.me/qafurov"
								target="_blank"
								sx={{ mt: 2 }}
							>
								Перейти в Telegram
							</Button>
						</Box>
					</Modal>
				</Box>
			</Container>
		</Limiter>
	);
};