const img_hide = document.getElementsByClassName('img-hide')
		

		for(var i=0;i<img_hide.length;i++)
		{
			img_hide[i].style.display = 'none'
		}

		const show = ()=>{
		for(var i=0;i<img_hide.length;i++)
			{
				img_hide[i].style.display = 'block'
			}
		}
		show()

		const less = () =>{
			
			for(var i=0;i<img_hide.length;i++)
			{
				img_hide[i].style.display = 'none'
			}
		}
		less()