import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                <label htmlFor="name" >Name: </label><input type="text" name="name" required placeholder='Abc'/>
                </div>
                <div>
                    <label htmlFor="email" >Email: </label><input type="email" name="email" required placeholder='abc@mail.com'/>
                </div>
                <div>
                    <label>Message</label>
                    <input type='text' required placeholder='Ask your doubts..' />
                </div>
            <button type="submit">Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact