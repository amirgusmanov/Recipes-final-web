import React from 'react';
import "./Meal.scss";
import { AiOutlineCheckSquare } from 'react-icons/ai';

const MealSingle = ({ meal }) => {
  console.log(meal);
  let instructions = meal?.instructions?.split('\r\n');
  instructions = instructions?.filter(instruction => instruction.length > 1);

  return (
    <div className='section-wrapper'>
      <div className='container'>
        <div className='sc-title'>Meal Details</div>
        <section className='sc-details bg-white'>
          <div className='details-head grid'>
            <div className='details-img'>
              <img src={meal?.thumbnail} alt="" className='img-cover' />
            </div>

            <div className='details-intro'>
              <h3 className='title text-black'>{meal?.title}</h3>
              <div className='py-4'>
                <div className='category flex align-center'>
                  <span className='text-uppercase fw-8 ls-1 my-1'>category: &nbsp;</span>
                  <span className='text-uppercase ls-2'>{meal?.category}</span>
                </div>

                <div className='source flex align-center'>
                  <span className='fw-7'>Source: &nbsp;</span>
                  <a href={meal.source}>
                    {meal.source ? (meal?.source).substring(0, 40) + "..." : "Not found"}
                  </a>
                </div>
              </div>

              <div className='ingredients my-5 px-3 py-3'>
                <h6 className='fs-16 text-white'>Ingredients</h6>
                <ul className='grid'>
                  {
                    meal?.ingredients?.map((ingredient, idx) => (
                      <li key={idx} className="flex align-center">
                        <span className='text-capitalize text-white fs-15'>{ingredient}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className='details-body'>
            <div className='instructions my-4'>
              <h6 className='fs-16'>Instructions:</h6>
              <ul className='grid'>
                {
                  instructions?.map((instruction, idx) => (
                    <li key={idx} className="fs-14">
                      <AiOutlineCheckSquare size={18} className="text-black li-icon" />
                      <span className='li-text fs-16 fw-5 op-09'>{instruction}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MealSingle