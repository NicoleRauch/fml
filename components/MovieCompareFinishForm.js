import React from 'react'
import Movie from './MovieItem'

export default ({onFinish, onNext, movie, result}) => (
	<div>
		<Movie {...movie} />
		Is rated number {result}
		<button type="button"
			onClick={onNext}
		>
			Next
		</button>
		<button type="button"
			onClick={onFinish}
		>
			Finish
		</button>
	</div>
)

