import { useForm } from "react-hook-form"

// basic example of how to use react-hook form
// function App() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors, isSubmitting },
//   } = useForm()

//   async function onSubmit(data) {
//     // api call simulate
//     await new Promise((resolve) => setTimeout(resolve, 5000))
//     console.log("submitting the form", data)
//   }
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>

//       <div>
//         <label>First Name:</label>
//         <input
//           className="border 1px border-solid"
//           // registering the field with its name 
//           {...register('firstName')}></input>
//       </div>
//       <br></br>

//       <div>
//         <label>Middle Name:</label>
//         <input

//           {...register('middleName',
//             {
//               required: true,
//               minLength: { value: 3, message: 'Min length atleast 3' },
//               maxLength: 10
//             })
//           }></input>
//         {/* to make error visible */}
//         {errors.middleName && <p className="text-red-600">{errors.middleName.message}</p>}
//       </div>
//       <br></br>

//       <div>
//         <label>Last Name:</label>
//         <input
//           {...register('lastName')}
//           className="border 1px border-solid"></input>
//       </div>

//       {/* if dont want to submit until the previous submissin is performing */}
//       <input
//         className="border 1px border-solid"
//         type="submit"
//         disabled={isSubmitting}
//         value={isSubmitting ? "Submitting" : "Submit"}></input>
//       <br></br>
//     </form>
//   )
// }



// main code starts from here
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data) {
    // api call simulate
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("submitting the form", data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>


      <div>
        <label>Upload Image:</label>
        <input
          type="file"
          accept="audio/"
          className="mb-4"

          {...register('uploadAudio',
            {
              required: true,
            })
          }></input>

        <label>Upload Audio:</label>
        <input
          type="file"
          accept="image/"
          className="mb-4"

          {...register('uploadAudio',
            {
              required: true,
            })
          }></input>

        <label>Upload Audio:</label>
        <input
          type="file"
          accept="audio/"
          className="mb-4"

          {...register('uploadAudio',
            {
              required: true,
            })
          }></input>

        <label>Textarea</label>
        <textarea

          {
          ...register('pasteText')
          }>

        </textarea>
      </div>
      <br></br>

      {/* if dont want to submit until the previous submissin is performing */}
      <input
        className="border 1px border-solid"
        type="submit"
        disabled={isSubmitting}
        value={isSubmitting ? "Submitting" : "Submit"}></input>
      <br></br>
    </form>
  )
}

export default App
