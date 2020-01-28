import React, { useCallback } from 'react';
import useEvent from 'react-use/lib/useEvent'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import { Image } from 'react-bootstrap';
import 'react-medium-image-zoom/dist/styles.css'

const MappedComponent = props => {
    const imgSize = 500;
    const activeIndex = props.activeIndex
    const length = props.length
    const handler = props.activeIndexHandler
    const handleKeyDown = useCallback(e => {
        if (activeIndex === null) {
        return
        }

        if (e.key === 'ArrowLeft' || e.keyCode === 37) {
        handler(Math.max(activeIndex - 1, 0))
        } else if (e.key === 'ArrowRight' || e.keyCode === 39) {
        handler(Math.min(activeIndex + 1, length - 1))
        }
    },
    [activeIndex, length]
    )

    useEvent('keydown', handleKeyDown, document)

    const ZoomChangeHandler = useCallback( isZoomed => {
        if (isZoomed) {
            props.activeIndexHandler(props.index)
            return
        }
        props.activeIndexHandler(null)
    }, [props.index]);
    return (
        <ControlledZoom
            isZoomed={props.activeIndex === props.index}
            onZoomChange={ZoomChangeHandler}
            transitionDuration={0}
            wrapStyle={{ width: '100%' }}
        >
            <Image key={props.index} src={props.img} alt="" width={imgSize} height={imgSize} className="img-thumbnail" rounded/>
        </ControlledZoom>
    );
}


class ListImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activeIndex: null,
        };
    }
    setActiveIndex= (index) => {
        this.setState({activeIndex: index})
    }

    render() {
        return (
            <div>
            <h2 style={{textAlign: 'left'}}>
                {this.props.title}
            </h2>
            <ul
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0
                }}
            >
                {this.props.images.map((img, i) => {
                    return (
                        <li
                        key={`${i}-${img.src}`}
                        style={{ margin: '0 1rem 1rem 0', width: 'calc(33% - 1rem)' }}
                        >
                            <MappedComponent
                            key={i}
                            img={img}
                            index={i}
                            activeIndex={this.state.activeIndex}
                            length={this.props.images.length}
                            activeIndexHandler={this.setActiveIndex}
                            />
                        </li>
                    )
                })}
            </ul>
            </div>
        );
    }
}
export default ListImages;
