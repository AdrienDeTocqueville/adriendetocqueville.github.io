function fill_card(id, title, description) {
	let c = document.querySelector(id);
	c.querySelector(".title").innerHTML = title;
	c.querySelector("p").innerHTML = description;
}

function setLang(lang) {
	if (lang == "en") {
		document.querySelector("#projects").innerHTML = "My projects";
		for (let c of document.querySelectorAll(".more"))
			c.innerHTML = "Show more";


		fill_card("#minge", "3D Game Engine", "Development of a 3D game engine using C++ and OpenGL and a physic engine for convex rigid bodies.<br>Implemented using an ECS design pattern with support for graphical effects, shadows, skeletal animation and heightmaps.");

		fill_card("#js", "Javascript Framework", "Architecture and development of a front-end web framework to develop single-page web applications and provide a client side MVC architecture.<br>Used it in a school project to create a home automation website.");

		fill_card("#car", "Autonomous car", "Creation and development of a hardware accelerated C++ neural network library using the backpropagation algorithm.<br>Used for the training of a convolutional neural network (CNN) to drive a car in a simulation with camera input.");

		fill_card("#garage", "Neural network formation", "This is a formation I made and gave to ISEP students to introduce them to feed forward neural networks and supervised learning.");

		fill_card("#sh", "Shell", "Pure C project with no external library. It is a UNIX shell built from scratch.<br>It supports line editing, autocompletion, job control and some shell scripting.<br>Made with 3 students as the last branch project at school 42.");

		fill_card("#mario", "Mario Bros game with AI", "Simple 2D game built with SFML to learn C/C++.<br>Later, I integrated a AI agent learning to play the game with a genetic algorithm.<br>The algorithm is called NEAT and was inspired by a video of SethBling on youtube.");
	}
}
