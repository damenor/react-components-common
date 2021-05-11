type getClassNameProps = {
  defaultClass: string,
  className?: string,
  conditionals?: {[key:string]: boolean},
}

export const getClassName = ({
  defaultClass,
  className,
  conditionals,
}: getClassNameProps): string => {

  let classNameTemp = defaultClass

  if(className) classNameTemp = `${defaultClass} ${className}`

  if(conditionals) {
    let classNameConditionals = ''
    Object.keys(conditionals).map(key => {
      if(conditionals[key]) {
        classNameConditionals = `${classNameConditionals} ${defaultClass}--${key}`
      }
    })
    classNameTemp = `${classNameTemp} ${classNameConditionals}`
  }

  return classNameTemp
}
