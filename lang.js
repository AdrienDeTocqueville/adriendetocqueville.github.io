function fill_card(id, title, description) {
	let c = document.querySelector(id);
	c.querySelector(".title").innerHTML = title;
	c.querySelector("p").innerHTML = description;
}

function setLang(lang) {
	if (lang == "en") {
		for (let c of document.querySelectorAll(".more"))
			c.innerHTML = "Show more";

		document.querySelector("#about").innerHTML = "About me";
		document.querySelector("main > p").innerHTML = "I am a french student in last year of ISEP engineering school. I am simultaneously studying at the 42 school of Paris.<br>On this site, you will find my most interesting projetcts, wich I realised on my free time or during my schooling.";


		document.querySelector("#pro").innerHTML = "Internship";
		let c = document.querySelector("#dassault");
		c.querySelector(".title").innerHTML = "Dassault Syst&egrave;mes";
		c.querySelectorAll("a")[0].innerHTML = "Software to visualize high resolution height data at Planet scale:";
		c.querySelectorAll("li")[0].innerHTML = "Development of a 3D render engine using Vulkan ";
		c.querySelectorAll("li")[1].innerHTML = "Sparse texturing and Hardware Tessellation";
		c.querySelectorAll("a")[1].innerHTML = "Deep learning to analyze and fix these data:";
		c.querySelectorAll("li")[2].innerHTML = "Development and training of a U-Net neural network to detect incorrect data using Python and Tensorflow";
		c.querySelectorAll("li")[3].innerHTML = "Training of a second network to artificially generate new data";


		document.querySelector("#projects").innerHTML = "My projects";
		fill_card("#minge", "3D Game Engine", "Development of a 3D game engine using C++ and OpenGL and a physic engine for convex rigid bodies.<br>Implemented using an ECS design pattern with support for graphical effects, shadows, skeletal animation and heightmaps.");

		fill_card("#js", "Javascript Framework", "Architecture and development of a front-end web framework to develop single-page web applications and provide a client side MVC architecture.<br>Used it in a school project to create a home automation website.");

		fill_card("#jim", "Plateformer 2D", "2D plateformer made with Unity during my semester at Polytechnique Montréal.");

		fill_card("#car", "Autonomous car", "Creation and development of a hardware accelerated C++ neural network library using the backpropagation algorithm.<br>Used for the training of a convolutional neural network (CNN) to drive a car in a simulation with camera input.");

		fill_card("#air", "French Robotics Cup", "Associative school project at ISEP to compete at the 2018 and 2019 French Robotics Cup.<br>Vice president of the association, I led a technical team of 8 people.<br>Oversaw technical developments, education and cohesion of the team.<br>We worked on the strategy, 3D modeling, electronics, software, construction and the autonomous steering algorithm.");


		fill_card("#garage", "Neural network formation", "This is a formation I made and gave to ISEP students to introduce them to feed forward neural networks and supervised learning.<br><br>The video has more than 11000 views as of today !");

		fill_card("#sh", "Shell", "Pure C project with no external library. It is a UNIX shell built from scratch.<br>It supports line editing, autocompletion, job control and some shell scripting.<br>Made with 3 students as the last branch project at school 42.");

		fill_card("#trictrac", "Tric Trac Game", "This is an old school game, ancestor of backgammon, I made with my game engine to put in to the test.<br>The goal was to reimplement this board game as a multiplayer game to learn things about networking.<br>The project is not finished and will probably never be.");

		fill_card("#mario", "Mario Bros game with AI", "Simple 2D game built with SFML to learn C/C++.<br>Later, I integrated a AI agent learning to play the game with a genetic algorithm.<br>The algorithm is called NEAT and was inspired by a video of SethBling on youtube.");
	}
}
