"use client";
import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';
import CloseIcon from "@mui/icons-material/Close";
import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	IconButton,
	Modal,
	Stack,
	Typography,
} from "@mui/material";
import { useState } from "react";
import "swiper/css"; // Обновленный импорт стилей Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const events = [
	{
		id: 1,
		title: "Настольные игры",
		date: "2024-12-05",
		time: "18:57",
		location: "Махачкала, ул. Герцина 2",
		images: [
			"https://avatars.mds.yandex.net/get-altay/14451083/2a00000192fff975f725cb443e20bd739dab/L_height",
			"https://avatars.mds.yandex.net/get-altay/10242164/2a00000192fff9556b3960a6ef325f6bf8f6/L_height",
		],
		description: `В кофейне-музее "Город 1857" проходят вечера настольных игр, где уютная атмосфера 
		старой Махачкалы сочетается с увлекательным досугом и ароматным кофе.`,
	},
	{
		id: 2,
		title: "Ярмарка",
		date: "2024-12-08",
		time: "15:00",
		location: "Махачкала, Плошадь им. Ленина",
		images: [
			"https://dagfolkkultura.ru/upload/iblock/ee6/sd94urvg5xa8r83evxojjefujt33qajl.jpg",
			"https://mahachkala.bezformata.com/content/image672904777.jpg",
		],
		description: `На площади Ленина проходит яркая ярмарка, где звучит музыка, толпы людей наслаждаются 
		вкусной уличной едой, а художественные выставки и ярмарки создают атмосферу праздника и единства.`,
	},
	{
		id: 3,
		title: "Настольные игры",
		date: "2024-12-05",
		time: "18:57",
		location: "Махачкала, ул. Герцина 2",
		images: [
			"https://avatars.mds.yandex.net/get-altay/14451083/2a00000192fff975f725cb443e20bd739dab/L_height",
			"https://avatars.mds.yandex.net/get-altay/10242164/2a00000192fff9556b3960a6ef325f6bf8f6/L_height",
		],
		description: `В кофейне-музее "Город 1857" проходят вечера настольных игр, где уютная атмосфера 
		старой Махачкалы сочетается с увлекательным досугом и ароматным кофе.`,
	},
];
export const Events = () => {
	const [open, setOpen] = useState(false);
	const [selectedEvent, setSelectedEvent] = useState(null);
	const handleOpen = (event) => {
		setSelectedEvent(event);
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
		setSelectedEvent(null);
	};
	return (
		<Limiter>
			<Container className='pt-container'>
				<Box pb={2}>
					<Stack spacing={3}>
						{events.map((event) => (
							<Card
								key={event.id}
								sx={{
									display: "flex",
									flexDirection: "column",
									borderRadius: 3,
									overflow: "hidden",
									boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
									padding: '5px 5px 0'
								}}
							>
								<CardMedia
									component="img"
									image={event.images[0]}
									alt={event.title}
									sx={{ width: "100%", height: '150px', objectFit: "cover", borderRadius: '20px 20px 0 0' }}
								/>
								<Box
									sx={{
										flex: 1,
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
									}}
								>
									<CardContent>
										<Typography variant="h6" fontWeight="bold" gutterBottom>
											{event.title}
										</Typography>
										<Typography variant="body2" color="text.secondary" mb={1}>
											{event.date} | {event.time}
										</Typography>
										<Typography variant="body2" color="text.secondary" mb={2}>
											{event.location}
										</Typography>
										<Typography variant="body2" color="text.primary" noWrap>
											{event.description}
										</Typography>
									</CardContent>
									<Box sx={{ p: 2 }}>
										<Button
											variant="outlined"
											color="primary"
											fullWidth
											sx={{ textTransform: "none", borderRadius: 1 }}
											onClick={() => handleOpen(event)}
										>
											Подробнее
										</Button>
									</Box>
								</Box>
							</Card>
						))}
					</Stack>
					{/* Модальное окно */}
					<Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
						<Box
							sx={{
								width: "90%",
								maxWidth: 600,
								bgcolor: "background.paper",
								borderRadius: 3,
								boxShadow: 24,
								p: 3,
								mx: "auto",
								mt: "10vh",
								position: "relative",
							}}
						>
							<IconButton
								onClick={handleClose}
								sx={{
									position: "absolute",
									top: 16,
									right: 16,
								}}
							>
								<CloseIcon />
							</IconButton>
							{selectedEvent && (
								<>
									<Typography id="modal-title" variant="h6" fontWeight="bold" mb={2}>
										{selectedEvent.title}
									</Typography>
									<Swiper
										spaceBetween={10}
										slidesPerView={1}
										pagination={{ clickable: true }}
										autoplay={{ delay: 3000 }}
										modules={[Pagination, Autoplay]}
									>
										{selectedEvent.images.map((image, index) => (
											<SwiperSlide key={index}>
												<Box
													component="img"
													src={image}
													alt={`Slide ${index}`}
													sx={{ width: "100%", height: "100%", borderRadius: 2,  objectFit: "contain" }}
												/>
											</SwiperSlide>
										))}
									</Swiper>
									<Typography id="modal-description" mt={2}>
										{selectedEvent.description}
									</Typography>
									<Typography variant="body2" color="text.secondary" mt={1} style={{fontWeight: 'bold'}}>
										{selectedEvent.date} | {selectedEvent.time} - {selectedEvent.location}
									</Typography>
								</>
							)}
						</Box>
					</Modal>
				</Box>
			</Container>
		</Limiter>
	);
};