const icons = [
	{
		icon:"arachnids-wrath.webp",
		name:"Arachnid's Wrath",
		description: `This icon features a dark, twisted arrow shaft with a spider-shaped arrowhead glowing faintly with a purple hue. Delicate spider legs extend from the arrowhead, creating a menacing and mysterious vibe with a gothic aesthetic.`,
		tags: ["spider","arrow", "purple", "gothic"]
	},
	{
		icon: "eclipse-fang.webp",
		name: "Eclipse Fang",
		description: `This icon features a dark, metallic shaft that shimmers with subtle iridescence. The arrowhead is shaped like a crescent moon with spider fangs extending from it, glowing with a soft silver light. The design blends elegance with an ominous vibe, emphasizing the contrast between light and shadow.`,
		tags: ["spider", "arrow", "moon", "fang", "silver", "elegant"]
	},
	{
		icon: "necrotic-web.webp",
		name: "Necrotic Web",
		description: `This icon features a dark, bone-like shaft with an arrowhead made of twisted, decayed webbing that emits a faint, sickly green glow. The entire design evokes a sense of dread and decay, with the arrow wrapped in strands of unraveling, cursed silk.`,
		tags: ["spider", "arrow", "web", "decay", "bone", "green", "cursed"]
	},
	{
		icon: "night-weaver.webp",
		name: "Night Weaver",
		description: `This icon features a dark, obsidian shaft with a broad arrowhead resembling a spider's web, with each line of the web glowing in a soft, eerie blue. The fletching is made of fine, shadowy feathers, giving it a mystical and otherworldly feel.`,
		tags: ["spider", "arrow", "web", "blue", "shadow", "mystical"]
	},
	{
		icon: "shadow-silk.webp",
		name: "Shadow Silk",
		description: `This icon features a midnight-black shaft with an arrowhead crafted from dense, shadowy spider silk, giving it a ghostly and ethereal appearance. The arrow seems to partially dissolve into wisps of shadow, symbolizing stealth and the ability to strike from darkness.`,
		tags: ["spider", "arrow", "silk", "shadow", "black", "ghostly"]
	},
	{
		icon: "venom-veil.webp",
		name: "Venom Veil",
		description: `This icon features a deep, emerald green shaft pulsating with toxic energy. The jagged arrowhead is made from crystallized venom, with a faint green mist seeping from it, giving it a lethal and sinister appearance.`,
		tags: ["spider", "arrow", "venom", "green", "crystal", "toxic", "sinister"]
	},
	{
		icon: "venomous-thread.webp",
		name: "Venomous Thread",
		description: `This icon features a sleek, dark green shaft with an arrowhead resembling a spider's fang dripping with venom. The arrow is entwined with thin, toxic-green threads that pulse with energy, highlighting its deadly nature.`,
		tags: ["spider", "arrow", "venom", "green", "fang", "toxic"]
	},
	{
		icon: "widows-strike.webp",
		name: "Widow's Strike",
		description: `This icon features a slender, black shaft with a sleek, red-tipped arrowhead shaped like the black widow spider's hourglass symbol. The arrow is wrapped in thin, glistening web strands, emphasizing the dangerous elegance of the black widow.`,
		tags: ["spider", "arrow", "black widow", "red", "web", "elegant"]
	},
	{"icon":"phantom-silk.webp","name":"Phantom Silk","description":"An ethereal arrow with a translucent shaft and a ghostly spider-shaped arrowhead. Woven from faint, shimmering threads of spider silk, it glows with a pale, bluish light, giving it a spectral and haunting quality.","tags":["spider","arrow","ethereal","ghostly","spectral"]},
	{"icon":"web-slinger.webp","name":"Web Slinger","description":"A playful, cartoony arrow with a bright orange shaft and a large, round arrowhead resembling a cute spider with big eyes. Wrapped in bouncy webbing, this design has a lighthearted and whimsical feel.","tags":["spider","arrow","cartoon","cute","playful"]},
	{"icon":"cyber-arachnid.webp","name":"Cyber Arachnid","description":"A sleek, metallic arrow with a neon blue shaft and an arrowhead resembling a futuristic spider made of metal and circuitry. The spider's eyes glow with an intense red light, surrounded by holographic webbing pulsing with energy.","tags":["spider","arrow","sci-fi","cybernetic","futuristic","neon","blue","metal"]},
	{"icon":"venomous-shadow.webp","name":"Venomous Shadow","description":"A dark and menacing arrow with a jagged obsidian shaft and an arrowhead made from a glowing green crystal shaped like a spider's fang. Shadowy tendrils wrap around the arrow, and venom drips from the arrowhead, glowing eerily in the darkness.","tags":["spider","arrow","dark fantasy","venomous","obsidian","glow","green","shadowy"]},
	{"icon":"arachnid-curse.webp","name":"Arachnid Curse","description":"A twisted, gnarled arrow with an arrowhead shaped like a spider with sharp, elongated legs. The dark purple arrowhead glows faintly with cursed energy, wrapped in wisps of dark, misty tendrils, evoking a sense of eerie dread and danger.","tags":["spider","arrow","spooky","cursed","dark purple","misty"]},
	{"icon":"silk-enchant.webp","name":"Silk Enchant","description":"A sleek, silver arrow with an arrowhead made of iridescent spider silk that shimmers with magical energy. Adorned with intricate rune-like patterns and surrounded by a soft, glowing aura, this arrow feels both enchanting and otherworldly.","tags":["spider","arrow","mystical","iridescent","magical","silver"]},
	{"icon":"venom-stinger.webp","name":"Venom Stinger","description":"A highly detailed arrow with a wooden shaft, wrapped in natural fibers, and an arrowhead made from a sharp, curved spider fang. The arrowhead is dark and glossy, with droplets of venom dripping from the tip. The fletching is made from real feathers, giving it an authentic, handcrafted appearance.","tags":["spider","arrow","realistic","wooden","venom","feathers"]},
	{"icon":"shadow-weaver.webp","name":"Shadow Weaver","description":"A dark, ominous arrow with a twisted black iron shaft and an arrowhead resembling a spider with elongated, menacing legs. The spider's body glows faintly red, and the arrow is wrapped in fine black webbing, evoking fear and mystery.","tags":["spider","arrow","gothic","black iron","red","glow","webbing"]},
	{"icon":"gearfang.webp","name":"Gearfang","description":"An arrow with a brass shaft, adorned with intricate gears and cogs, and an arrowhead shaped like a mechanical spider. The spider's body is made of metallic parts with glowing orange eyes and steam vents, giving it a mechanical and industrial steampunk aesthetic.","tags":["spider","arrow","steampunk","brass","gears","mechanical","glow","orange"]},
	{"icon":"neon-venom.webp","name":"Neon Venom","description":"A sleek, chrome arrow with an arrowhead shaped like a stylized spider, featuring sharp, angular legs. The arrowhead glows with neon green lines that pulse with energy, and the fletching is made from translucent material that refracts light, giving it a futuristic and high-tech appearance.","tags":["spider","arrow","futuristic","chrome","neon","green","glow","translucent"]},
	{"icon":"spider-strike.webp","name":"Spider Strike","description":"An arrow with a vibrant crimson shaft and an arrowhead resembling a stylized spider with exaggerated features and glowing blue eyes. Surrounded by dynamic energy lines and speed effects, this design captures the bold, expressive aesthetics of anime.","tags":["spider","arrow","anime","crimson","glow","blue","dynamic","speed effects"]},
	{"icon":"silken-fury.webp","name":"Silken Fury","description":"An arrow with a rich, emerald-green shaft and an arrowhead shaped like a spider with intricate golden markings. The spider's legs curve elegantly around the arrowhead, and the arrow is wrapped in glowing strands of silk, capturing the vibrant and majestic essence of fantasy.","tags":["spider","arrow","fantasy","emerald-green","golden","glow","silk","majestic"]},
	{"icon":"flesh-piercer.webp","name":"Flesh Piercer","description":"An arrow with a shaft made of sinewy, muscular fibers and an arrowhead resembling a spider’s fang made of bone. The arrowhead is partially covered in raw, marbled meat, with veins running along the shaft, evoking a visceral, organic feel.","tags":["spider","arrow","meat","flesh","bone","organic","sinewy"]},
	{"icon":"electric-web.webp","name":"Electric Web","description":"A sleek, black arrow with an arrowhead resembling a spider made of glowing neon threads. The spider's legs and web are illuminated in bright neon colors like electric blue and neon pink, surrounded by energy sparks, creating a vibrant and electrifying aesthetic.","tags":["spider","arrow","neon","electric","blue","neon","pink","glow","energy sparks"]}
	
];