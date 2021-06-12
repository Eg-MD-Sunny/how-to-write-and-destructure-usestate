import { useState } from 'react';
import './App.css';

function App() {
  return (
	<div className="App">
		<header className="App-header">
			{/*=====>>Component Call [Start]*/}
				<MovieCounter></MovieCounter>
			{/*=====>>Component Call [End]*/}

			
		</header>
	</div>
  );
}
//=====>>Create Component [Start]
		function MovieCounter(){
			// const count = 5;

		//---Example-01
		const result = useState(0);
		console.log(result);

		//---Example-02
		const result_01 = ['abc','def'];
		console.log(result_01[0], result_01[1]);

		//---Example-03
		const result_02 = ['Good', 'Bad'];
		const First = result_02[0];
		const Second = result_02[1];
		console.log(First, Second);

		//---Example-04
		const [first, second] = ['Not', 'Good']
		console.log(first, second);

		//---Example-05
		const [one, two] = useState(0)
		console.log(one, two);

		//---Example-06
		const [count, setCount] = useState(0)
		console.log(count, setCount); //======>> useState Declear 
//======>>onClick Function [Start]
		const handleClicked = () => {
			console.log('Someone Clicked Me');
			const newCount = count + 1;
			setCount(newCount);
		}
//======>>onClick Function [End]
		return(
			<div>
				<button onClick={handleClicked}>Add Movie</button>
				<h3>Number of Movies : {count}</h3>
				<MovieDisplay movies={count}></MovieDisplay>
				<MovieDisplay movies={count + 10}></MovieDisplay>
				<MovieDisplay movies={count + 5}></MovieDisplay>
				<MovieDisplay movies={count}></MovieDisplay>
			</div>
		)
	}
//=====>>Create Component [End]

//=====>>Create Component [Start]
function MovieDisplay(props){
	return <h4>Movies I have acted : {props.movies} </h4>
}
//=====>>Create Component [End]
export default App;
