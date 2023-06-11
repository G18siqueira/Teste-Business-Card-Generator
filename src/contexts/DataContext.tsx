import {
  ReactNode,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react'

interface DataType {
  name: string
  email: string
  phone: string
}

interface DataContextType {
  dataValue: DataType
  setDataValue: Dispatch<SetStateAction<DataType>>
  setSubmitted: Dispatch<SetStateAction<boolean>>
  submitted: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
  isLoading: boolean
  clearData: () => void
}

interface DataProviderProps {
  children: ReactNode
}

export const DataContext = createContext({} as DataContextType)

export default function DataProvider({ children }: DataProviderProps) {
  const [dataValue, setDataValue] = useState<DataType>({
    name: '',
    email: '',
    phone: '',
  })
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const clearData = () => {
    setDataValue({ name: '', email: '', phone: '' })
    setSubmitted(false)
  }

  return (
    <DataContext.Provider
      value={{
        dataValue,
        setDataValue,
        clearData,
        submitted,
        setSubmitted,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
