"""
Gå gjennom tallene 1-100

Hvis tallet kan deles på 3, print Sjoko
Hvis tallet kan deles på 5, print Lade
Hvis tallet kan deles på 3 og 5, print SjokoLade
Ellers print tallet (i)
"""

for i in range(0, 101):
        if i % 3 == 0 and i % 5 == 0:
            print(i, ': Sjokolade')
        elif i % 3 == 0:
            print(i, ': Sjoko')
        elif i % 5 == 0:
            print(i, ': lade')
        else:
            print(i, (f': {i}'))

