const photos = [
	{
		events: ['graduation', 'graduate', ''],
		subjects: ['girl', 'woman'],
		backgrounds: ['mountain'],
		types: ['portrait'],
		image: './galleryimg/DSC00001-min.jpg',
		photoTypes: 'vertical_img',
		name: 'Image 1',
		column: 'column1'
	},
	{
		events: ['half body', ''],
		subjects: ['boy', 'man'],
		backgrounds: ['wall'],
		types: ['portrait', 'afternoon'],
		image: './galleryimg/DSC00273-min.jpg',
		photoTypes: 'horizontal_img',
		name: 'Image 2',
		column: 'column1'
	},
	{
		events: [''],
		subjects: ['boy', 'man'],
		backgrounds: ['sky', 'snow'],
		types: ['portrait', 'afternoon'],
		image: './galleryimg/DSC01154-min.jpg',
		photoTypes: 'horizontal_img',
		name: 'Image 3',
		column: 'column1'
	},
	{
		events: ['travel', 'street vendor',''],
		subjects: ['house', 'store', 'shop'],
		backgrounds: ['mountain','sky'],
		types: ['landscape', 'night'],
		image: './galleryimg/DSC08485-min.jpg',
		photoTypes: 'horizontal_img',
		name: 'Image 4',
		column: 'column1'
	},
	{
		events: ['half body',''],
		subjects: ['girl', 'woman'],
		backgrounds: ['building'],
		types: ['portrait', 'afternoon'],
		image: './galleryimg/DSC00416-min.jpg',
		photoTypes: 'vertical_img',
		name: 'Image 5',
		column: 'column1'
	},
	{
		events: ['summer', 'travel', ''],
		subjects: ['beach', 'ocean', 'city'],
		backgrounds: ['sky'],
		types: ['landscape', 'afternoon'],
		image: './galleryimg/IMG_3755-min.jpg',
		photoTypes: 'horizontal_img',
		name: 'Image 6',
		column: 'column1'
	},
	{
		events: ['travel',''],
		subjects: ['mountain', 'ocean', 'beach'],
		backgrounds: ['sky', 'sun'],
		types: ['landscape', 'afternoon'],
		image: './galleryimg/DSC00003-min.jpg',
		photoTypes: 'horizontal_img',
		name: 'Image 7',
		column: 'column2'
	},
	{
		events: ['half body', ''],
		subjects: ['girl', 'woman'],
		backgrounds: ['wall'],
		types: ['portrait', 'afternoon'],
		image: './galleryimg/DSC00106-min.jpg',
		photoTypes: 'vertical_img',
		name: 'Image 8',
		column: 'column2'
	},
	{
		events: ['sealing', 'married', ''],
		subjects: ['girl', 'woman'],
		backgrounds: ['timple', 'events'],
		types: ['portrait', 'morning'],
		image: './galleryimg/DSC00843-min.jpg',
		photoTypes: 'horizontal_img',
		name: 'Image 9',
		column: 'column2'
	},
	{
		events: ['married', 'wedding', 'banquet', ''],
		subjects: ['girl', 'woman', 'boy', 'man'],
		backgrounds: ['indoor'],
		types: ['portrait'],
		image: './galleryimg/DSC00888-min.jpg',
		photoTypes: 'horizontal_img',
		name: 'Image 10',
		column: 'column2'
	},
	{
		events: ['sealing', 'married', ''],
		subjects: ['girl', 'woman', 'boy', 'man'],
		backgrounds: ['timple'],
		types: ['portrait', 'events'],
		image: './galleryimg/DSC01138-min.jpg',
		photoTypes: 'horizontal_img',
		name: 'Image 11',
		column: 'column2'
	},
	{
		events: ['graduation', 'graduate', ''],
		subjects: ['girl', 'woman'],
		backgrounds: ['sky'],
		types: ['portrait'],
		image: './galleryimg/DSC05486-min.jpg',
		photoTypes: 'vertical_img',
		name: 'Image 12',
		column: 'column2'
	},
	{
		events: ['smile', ''],
		subjects: ['girl', 'woman'],
		backgrounds: ['bench', 'tree'],
		types: ['portrait'],
		image: './galleryimg/DSC00402-min.jpg',
		photoTypes: 'vertical_img',
		name: 'Image 13',
		column: 'column3'
	},
	{
		events: ['couple', ''],
		subjects: ['girl', 'woman', 'boy', 'man'],
		backgrounds: ['sky', 'tree', 'snow'],
		types: ['portrait'],
		image: './galleryimg/DSC01264-min.jpg',
		photoTypes: 'horizontal_img',
		name: 'Image 14',
		column: 'column3'
	},
	{
		events: ['gender', 'reveal', ''],
		subjects: ['girl', 'woman', 'boy', 'man', 'couple'],
		backgrounds: ['indoor'],
		types: ['events'],
		image: './galleryimg/DSC00188-min.jpg',
		photoTypes: 'vertical_img',
		name: 'Image 15',
		column: 'column3'
	},
	{
		events: ['dancing party', ''],
		subjects: ['man', 'boy'],
		backgrounds: ['light'],
		types: ['events'],
		image: './galleryimg/DSC00002-min.jpg',
		photoTypes: 'horizontal_img',
		name: 'Image 16',
		column: 'column3'
	},
	{
		events: ['proposal', 'wedding', 'couple', ''],
		subjects: ['girl', 'woman', 'man', 'boy'],
		backgrounds: ['ocean', 'sky'],
		types: ['events'],
		image: './galleryimg/DSC05998-min.jpg',
		photoTypes: 'horizontal_img',
		name: 'Image 17',
		column: 'column3'
	},
	{
		events: ['graduation', 'graduate', ''],
		subjects: ['girl', 'woman'],
		backgrounds: ['sky'],
		types: ['events'],
		image: './galleryimg/DSC05520-min.jpg',
		photoTypes: 'horizontal_img',
		name: 'Image 18',
		column: 'column3'
	},
	{
		events: ['half body', ''],
		subjects: ['boy', 'man'],
		backgrounds: ['timple'],
		types: ['portrait'],
		image: './galleryimg/DSC06325-min.jpg',
		photoTypes: 'horizontal_img',
		name: 'Image 19',
		column: 'column4'
	},
	{
		events: ['sealing', 'wedding', 'couple', ''],
		subjects: ['girl', 'woman', 'man', 'boy'],
		backgrounds: ['stair'],
		types: ['portrait', 'events'],
		image: './galleryimg/DSC00376-min.jpg',
		photoTypes: 'vertical_img',
		name: 'Image 20',
		column: 'column4'
	},
	{
		events: ['graduation', 'graduate', ''],
		subjects: ['girl', 'woman'],
		backgrounds: ['indoor', 'hallways', 'corridor'],
		types: ['portrait'],
		image: './galleryimg/DSC00403-min.jpg',
		photoTypes: 'horizontal_img',
		name: 'Image 21',
		column: 'column4'
	},
	{
		events: ['sealing', 'wedding', 'couple', ''],
		subjects: ['girl', 'woman', 'man', 'boy'],
		backgrounds: ['temple'],
		types: ['portrait', 'tree'],
		image: './galleryimg/DSC01082-min.jpg',
		photoTypes: 'horizontal_img',
		name: 'Image 22',
		column: 'column4'
	},
	{
		events: ['couple', ''],
		subjects: ['girl', 'woman', 'man', 'woman'],
		backgrounds: ['sky'],
		types: ['portrait', 'afternoon'],
		image: './galleryimg/DSC01261-min.jpg',
		photoTypes: 'horizontal_img',
		name: 'Image 23',
		column: 'column4'
	},
	{
		events: ['', 'travel'],
		subjects: ['train'],
		backgrounds: ['sky', 'tree'],
		types: ['morning'],
		image: './galleryimg/IMG_4664-min.jpg',
		photoTypes: 'vertical_img',
		name: 'Image 23',
		column: 'column4'
	},
]

export default photos