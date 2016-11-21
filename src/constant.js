import React from 'react'

const imagePath = './images/'
export const backgroundColor = ['blue', 'red', 'green', 'yellow']
export const homepageTitle = 'Programming Language'
export const wavesClassName = 'waves'

const iconNames = ['java', 'c++', 'js', 'php', 'python', 'swift']
export const startPages = [(
	<div>
		<p>
			We all knows a lot of languages in the past, such as English, French, Japanese and ...Hokkienese. But today, we&apos;re going to talk about another language - programming language.
		</p>
		<ul id='icons'>
			{iconNames.map((name, index) => {
				return <li key={index}><img src={imagePath + name + '.jpg'} /></li>
			})}
		</ul>
	</div>
),(
	<div className='start-2'>
		<p>
			The language we use in common is called natural language. As we all know, the function of natural language is to transfer information between people.
		</p>
		<div>
			<img src={imagePath + 'start_2_1' + '.png'} />
		</div>
	</div>
),(
	<div className='start-3'>
		<p>
			By contrast, the communication between people and machines is by programming language.
		</p>
	</div>
)]

export const categoryPages = [(
	<div>
		<p>
			Same as natural language, programming languages are also divided into many types, according to the design of thinking to divide, it can be divided into two kinds: imperative and functional.
		</p>
	</div>
),(
	<div>
		<p>
			These two kinds of thinking are derived from math, and they are the prototype of Turing Machine and λ calculus.
		</p>
	</div>
),(
	<div>
		<p>
			The difference between them is that imperative focus on description of &quot;how to do&quot;, and the functional focus on description of &quot;what to do&quot;.
		</p>
	</div>
),(
	<div>
		<p>
			From the other point of view, they are like oil painting and traditional Chinese painting, a focus on &quot;shape&quot;, a focus on &quot;meaning&quot;.
		</p>
	</div>
)]

export const developmentPages = [(
	<div>
		<p>
			In the competition and development of the last century, because of cost and technology, imperative completely defeated the functional, and thus derived from the &quot;Object-Oriented&quot;, a thought that helps us to describe the world, Everyone is familiar with the Java and C++ belongs to it.
		</p>
	</div>
),(
	<div>
		<p>
			Although the command style ruled for a long time, but with the development of times, its own defects are slowly exposed out, the functional again slowly back to the people&apos;s sight.
		</p>
	</div>
),(
	<div>
		<p>
			But this time, they are not the opposition, people began to try to combine them, to play out their advantages. Such as Python and JavaScript is like this.
		</p>
	</div>
)]

export const endPages = [(
	<div>
		<p>
			To this day, they have been infiltrating each other, and continue to develop, maybe this is the history of the development of things.
		</p>
	</div>
),(
	<div>
		<h1>Thanks!</h1>
	</div>
)]
