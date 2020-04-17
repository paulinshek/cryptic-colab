package core

type Direction int

const (
	Down Direction = iota
	Across Direction = iota
)

type Coordinate struct {
	X, Y int
}