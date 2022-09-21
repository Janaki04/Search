import React, { createContext } from 'react'

export const Text=createContext()

export const Create = (props) => {

    const data=[
        {
          id:1,
            name:"Janaki",
            email:"abc@gmail.com",
            number:9813,
            role:"react",
            about:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
            color:"blue"
       },
       {
        id:2,
        name:"Deepali",
        email:"abc@gmail.com",
        number:9813,
        role:"react",
        about:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
        color:"yellow"
        },
        {
          id:3,
            name:"John",
            email:"abc@gmail.com",
            number:9813,
            role:"react",
            about:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
            color:"aqua"
            },
            {
              id:4,
                name:"Andrew",
                email:"abc@gmail.com",
                number:9813,
                role:"react",
                about:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
                color:"pink"
                },
                {
                  id:5,
                    name:"Leo",
                    email:"abc@gmail.com",
                    number:9813,
                    role:"react",
                    about:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
                    color:"lightblue"
                },
                {
                    id:6,
                    name:"Nike",
                    email:"abc@gmail.com",
                    number:9813,
                    role:"react",
                    about:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
                    color:"lightgrey"
                    },
                    {
                      id:7,
                      name:"Apple",
                      email:"abc@gmail.com",
                      number:9813,
                      role:"react",
                      about:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
                      color:"red"
                      },
                      {
                        id:8,
                        name:"Honey",
                        email:"abc@gmail.com",
                        number:9813,
                        role:"react",
                        about:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
                        color:"white"
                        },
                        {
                          id:9,
                          name:"Harishtha",
                          email:"abc@gmail.com",
                          number:9813,
                          role:"react",
                          about:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
                          color:"green"
                          },
                          {
                            id:10,
                            name:"Nikitha",
                            email:"abc@gmail.com",
                            number:9813,
                            role:"react",
                            about:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
                            color:"yellow"
                            },
        ]


  return (
    <div>
        <Text.Provider value={data}>
          {props.children}
         
        </Text.Provider>
    </div>
  )
}